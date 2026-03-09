import type { Metadata } from "next";
import { posts, getPostById } from "@/lib/posts-data";
import PostPageClient from "./client";

/* ═══════════════════════════════════════════════════════════════ */
/*                     DYNAMIC METADATA (OG)                       */
/* ═══════════════════════════════════════════════════════════════ */

function extractFirstImage(html: string): string | null {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/);
  return match ? match[1] : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const numericId = Number(id);
  const post = getPostById(numericId);

  if (!post) {
    return {
      title: "CASTDAILY",
      description: "포스트를 찾을 수 없습니다.",
    };
  }

  const firstImage = extractFirstImage(post.articleHTML);
  const ogImage = firstImage?.startsWith("/")
    ? `https://www.castdaily.com${firstImage}`
    : firstImage || "https://www.castdaily.com/og-default.jpg";

  return {
    title: post.title,
    description: `${post.authorName} · ${post.dateText}`,
    openGraph: {
      title: post.title,
      description: `${post.authorName} · ${post.dateText}`,
      url: `https://www.castdaily.com/${post.id}`,
      siteName: "CASTDAILY",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: `${post.authorName} · ${post.dateText}`,
      images: [ogImage],
    },
  };
}

/* ═══════════════════════════════════════════════════════════════ */
/*                        MAIN PAGE                               */
/* ═══════════════════════════════════════════════════════════════ */

export default function PostPage() {
  return <PostPageClient />;
}
