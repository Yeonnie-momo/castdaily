import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      postId,
      postTitle,
      eventType = "scroll", // scroll | cta_click
      maxPercent,
      sectionsReached,
      ctaType, // popup_1 | popup_2 | content_link
      timestamp,
      userAgent,
      referrer,
    } = body;

    const now = new Date(timestamp || Date.now());
    const kstDate = now
      .toLocaleDateString("ko-KR", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" })
      .replace(/\. /g, "-")
      .replace(".", "");
    const kstTime = now.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });

    // Google Sheets에 기록
    // 컬럼: date | time | postId | postTitle | eventType | scrollPercent | sectionsReached | ctaType | userAgent | referrer
    await appendRow([
      kstDate,
      kstTime,
      String(postId),
      postTitle || "",
      eventType,
      maxPercent != null ? String(maxPercent) : "",
      Array.isArray(sectionsReached) ? sectionsReached.join(" → ") : "",
      ctaType || "",
      userAgent || "",
      referrer || "",
    ]);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("scroll-track error:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
