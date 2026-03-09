import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "Missing url parameter" },
      { status: 400, headers: corsHeaders() }
    );
  }

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; CastdailyBot/1.0)" },
      signal: AbortSignal.timeout(5000),
    });

    const html = await res.text();
    const hostname = new URL(url).hostname.replace(/^www\./, "");

    return NextResponse.json(
      {
        title: extractMeta(html, "og:title") ?? extractTag(html, "title") ?? hostname,
        image: extractMeta(html, "og:image") ?? null,
        description: extractMeta(html, "og:description") ?? null,
        hostname,
      },
      { headers: corsHeaders() }
    );
  } catch {
    const hostname = (() => {
      try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return url; }
    })();
    return NextResponse.json(
      { title: hostname, image: null, description: null, hostname },
      { headers: corsHeaders() }
    );
  }
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
  };
}

function extractMeta(html: string, property: string): string | null {
  const m =
    html.match(new RegExp(`<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']+)["']`, "i")) ??
    html.match(new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${property}["']`, "i"));
  return m ? m[1] : null;
}

function extractTag(html: string, tag: string): string | null {
  const m = html.match(new RegExp(`<${tag}[^>]*>([^<]+)</${tag}>`, "i"));
  return m ? m[1].trim() : null;
}
