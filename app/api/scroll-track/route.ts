import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { postId, postTitle, maxPercent, sectionsReached, timestamp, userAgent, referrer } = body;

    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!webhookUrl) {
      console.warn("SLACK_WEBHOOK_URL not set");
      return NextResponse.json({ ok: true });
    }

    const now = new Date(timestamp || Date.now());
    const kstTime = now.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });

    const sectionsText =
      sectionsReached && sectionsReached.length > 0
        ? sectionsReached.map((s: string) => `  - ${s}`).join("\n")
        : "  (소제목 없음)";

    const slackMessage = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: `📊 스크롤 리포트`,
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*게시글:*\n${postTitle}` },
            { type: "mrkdwn", text: `*Post ID:*\n${postId}` },
          ],
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*최대 스크롤:*\n${maxPercent}%` },
            { type: "mrkdwn", text: `*시간:*\n${kstTime}` },
          ],
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*도달한 소제목:*\n${sectionsText}`,
          },
        },
        ...(referrer
          ? [
              {
                type: "context",
                elements: [
                  { type: "mrkdwn", text: `유입 경로: ${referrer}` },
                ],
              },
            ]
          : []),
      ],
    };

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slackMessage),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("scroll-track error:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
