/**
 * Slack 일간/중간 리포트 스크립트
 * 사용법: npx tsx scripts/slack-digest.ts [morning|afternoon|evening]
 *
 * morning  (9시)  — 어제 전체 리포트
 * afternoon(2시)  — 오늘 ~1:30까지 (데이터 없으면 스킵)
 * evening  (7시)  — 오늘 ~7시까지 누적
 */

import "dotenv/config";
import { google } from "googleapis";

const SHEET_ID = process.env.GOOGLE_SHEET_ID!;
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL!;

function getAuth() {
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY!;
  const creds = JSON.parse(key);
  return new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
}

async function getRows() {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: "시트1!A:J",
  });
  return res.data.values || [];
}

// KST 날짜 문자열 (YYYY-MM-DD 형식으로 정규화)
function getKSTDate(offsetDays = 0): string {
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000 + offsetDays * 86400000);
  return kst.toISOString().slice(0, 10);
}

// 날짜 문자열 정규화: "2026-03-26" or "2026. 03. 26." → "2026-03-26"
function normalizeDate(raw: string): string {
  const m = raw.match(/(\d{4})\D*(\d{1,2})\D*(\d{1,2})/);
  if (!m) return raw;
  return `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
}

interface Row {
  date: string;
  time: string;
  postId: string;
  postTitle: string;
  eventType: string;
  scrollPercent: string;
  sectionsReached: string;
  ctaType: string;
  userAgent: string;
  referrer: string;
}

function parseRow(r: string[]): Row {
  return {
    date: r[0] || "",
    time: r[1] || "",
    postId: r[2] || "",
    postTitle: r[3] || "",
    eventType: r[4] || "",
    scrollPercent: r[5] || "",
    sectionsReached: r[6] || "",
    ctaType: r[7] || "",
    userAgent: r[8] || "",
    referrer: r[9] || "",
  };
}

function bucketPercent(p: number): string {
  if (p >= 90) return "90-100%";
  if (p >= 70) return "70-89%";
  if (p >= 50) return "50-69%";
  if (p >= 30) return "30-49%";
  return "0-29%";
}

function buildReport(rows: Row[], label: string): object | null {
  if (rows.length === 0) return null;

  const scrollRows = rows.filter((r) => r.eventType === "scroll");
  // 팝업 광고는 비활성화되어 리포트에서 제외 (popup_1, popup_2 무시)
  const ctaRows = rows.filter(
    (r) => r.eventType === "cta_click" && r.ctaType !== "popup_1" && r.ctaType !== "popup_2"
  );

  // --- 페이지별 방문자 수 ---
  const pageVisits: Record<string, { title: string; count: number }> = {};
  for (const r of scrollRows) {
    const key = r.postId;
    if (!pageVisits[key]) pageVisits[key] = { title: r.postTitle, count: 0 };
    pageVisits[key].count++;
  }

  const visitLines = Object.values(pageVisits)
    .sort((a, b) => b.count - a.count)
    .map((v) => `  • ${v.title}: *${v.count}명*`)
    .join("\n");

  // --- 페이지별 스크롤 분포 ---
  const pageScroll: Record<string, { title: string; buckets: Record<string, number>; sections: Record<string, number> }> = {};
  for (const r of scrollRows) {
    const key = r.postId;
    if (!pageScroll[key]) pageScroll[key] = { title: r.postTitle, buckets: {}, sections: {} };
    const p = parseInt(r.scrollPercent) || 0;
    const bucket = bucketPercent(p);
    pageScroll[key].buckets[bucket] = (pageScroll[key].buckets[bucket] || 0) + 1;

    // 마지막 도달 소제목 (가장 많이 이탈한 지점 파악용)
    if (r.sectionsReached) {
      const sections = r.sectionsReached.split(" → ");
      const lastSection = sections[sections.length - 1];
      if (lastSection) {
        pageScroll[key].sections[lastSection] = (pageScroll[key].sections[lastSection] || 0) + 1;
      }
    }
  }

  const scrollLines = Object.values(pageScroll)
    .map((ps) => {
      const bucketOrder = ["0-29%", "30-49%", "50-69%", "70-89%", "90-100%"];
      const bucketText = bucketOrder
        .filter((b) => ps.buckets[b])
        .map((b) => `${b} ${ps.buckets[b]}명`)
        .join(" / ");

      // 가장 많이 이탈한 소제목
      const topSection = Object.entries(ps.sections).sort((a, b) => b[1] - a[1])[0];
      const dropText = topSection ? `\n    → _"${topSection[0]}"_ 에서 가장 많이 이탈 (${topSection[1]}명)` : "";

      return `  • *${ps.title}*\n    ${bucketText}${dropText}`;
    })
    .join("\n");

  // --- CTA 클릭 현황 (팝업 제외, 콘텐츠 내 링크만) ---
  const ctaCounts: Record<string, number> = {};
  for (const r of ctaRows) {
    const label = "콘텐츠 내 링크";
    ctaCounts[label] = (ctaCounts[label] || 0) + 1;
  }

  const ctaLines =
    Object.keys(ctaCounts).length > 0
      ? Object.entries(ctaCounts)
          .map(([k, v]) => `  • ${k}: *${v}명*`)
          .join("\n")
      : "  (클릭 없음)";

  const totalVisitors = scrollRows.length;
  const totalClicks = ctaRows.length;
  const ctr = totalVisitors > 0 ? ((totalClicks / totalVisitors) * 100).toFixed(1) : "0";

  return {
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: `📊 ${label}`, emoji: true },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*총 방문자: ${totalVisitors}명 | CTA 클릭: ${totalClicks}명 (CTR ${ctr}%)*`,
        },
      },
      { type: "divider" },
      {
        type: "section",
        text: { type: "mrkdwn", text: `*📄 페이지별 방문자*\n${visitLines}` },
      },
      { type: "divider" },
      {
        type: "section",
        text: { type: "mrkdwn", text: `*📜 스크롤 깊이 분포*\n${scrollLines}` },
      },
      { type: "divider" },
      {
        type: "section",
        text: { type: "mrkdwn", text: `*🔥 CTA 클릭 현황*\n${ctaLines}` },
      },
    ],
  };
}

async function main() {
  const mode = process.argv[2] || "morning";
  const allRows = await getRows();
  const parsed = allRows.map(parseRow);

  let filtered: Row[];
  let label: string;

  if (mode === "morning") {
    const yesterday = getKSTDate(-1);
    filtered = parsed.filter((r) => normalizeDate(r.date) === yesterday);
    label = `일간 리포트 (${yesterday})`;
  } else if (mode === "afternoon") {
    const today = getKSTDate(0);
    filtered = parsed.filter((r) => normalizeDate(r.date) === today);
    label = `중간 리포트 (~13:30, ${today})`;
  } else {
    const today = getKSTDate(0);
    filtered = parsed.filter((r) => normalizeDate(r.date) === today);
    label = `저녁 리포트 (~19:00 누적, ${today})`;
  }

  // afternoon: 데이터 없으면 스킵
  if (mode === "afternoon" && filtered.length === 0) {
    console.log("No data for afternoon report. Skipping.");
    return;
  }

  const report = buildReport(filtered, label);
  if (!report) {
    console.log("No data to report.");
    return;
  }

  await fetch(SLACK_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(report),
  });

  console.log(`✅ ${label} sent to Slack`);
}

main().catch(console.error);
