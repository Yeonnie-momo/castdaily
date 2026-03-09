/**
 * scripts/sync-notion.ts
 *
 * Fetches pages from a Notion DB where Status == "발행",
 * converts their blocks to HTML, and appends new Post objects
 * into lib/posts-data.ts, then commits & pushes to GitHub.
 *
 * Usage: tsx scripts/sync-notion.ts
 */

import { Client, isFullBlock, isFullPage } from "@notionhq/client";
import type {
  BlockObjectResponse,
  RichTextItemResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import * as dotenv from "dotenv";

// ── Load env vars from .env.local ────────────────────────────────────────────
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
  console.error("Missing NOTION_TOKEN or NOTION_DATABASE_ID in .env.local");
  process.exit(1);
}

const notion = new Client({ auth: NOTION_TOKEN });

// ── Constants ─────────────────────────────────────────────────────────────────

const KOREAN_NICKNAMES = [
  "워킹맘쏘", "네일러버", "직장인J", "뷰티고수", "30대주부",
  "손톱고민러", "네일케어초보", "직장인K", "핸드케어매니아", "향기덕후",
  "겨울손톱", "뷰티블로거", "피부덕후", "살림여왕", "자기계발러",
  "뷰티인플루언서", "코덕언니", "미용고수", "촉촉피부", "건강한손톱",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomLikes(): number {
  return Math.floor(Math.random() * 401) + 100; // 100–500
}

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Take the last 7 digits of the Notion page UUID (hex stripped) as Post.id */
function uuidToId(uuid: string): number {
  const hex = uuid.replace(/-/g, "");
  return parseInt(hex.slice(-7), 16);
}

/** Read a plain text value from a Notion property */
function getPropText(
  page: PageObjectResponse,
  ...names: string[]
): string {
  for (const name of names) {
    const prop = page.properties[name];
    if (!prop) continue;
    if (prop.type === "title") {
      return prop.title.map((t) => t.plain_text).join("");
    }
    if (prop.type === "rich_text") {
      return prop.rich_text.map((t) => t.plain_text).join("");
    }
    if (prop.type === "url" && prop.url) return prop.url;
    if (prop.type === "number" && prop.number !== null)
      return String(prop.number);
    if (prop.type === "date" && prop.date?.start) return prop.date.start;
    if (prop.type === "select" && prop.select?.name) return prop.select.name;
  }
  return "";
}

/** Format a date string (ISO → YYYY.MM.DD) */
function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
}

/** Escape HTML special characters */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Convert an array of RichText items to HTML spans */
function richTextToHtml(richTexts: RichTextItemResponse[]): string {
  return richTexts
    .map((rt) => {
      let text = escapeHtml(rt.plain_text);
      if (rt.annotations.code) text = `<code>${text}</code>`;
      if (rt.annotations.bold) text = `<strong>${text}</strong>`;
      if (rt.annotations.italic) text = `<em>${text}</em>`;
      if (rt.annotations.strikethrough) text = `<s>${text}</s>`;
      if (rt.annotations.underline) text = `<u>${text}</u>`;
      if (rt.type === "text" && rt.text.link) {
        text = `<a href="${escapeHtml(rt.text.link.url)}" target="_blank" rel="noreferrer">${text}</a>`;
      }
      return text;
    })
    .join("");
}

/** Convert a list of Notion blocks to an HTML string */
async function blocksToHtml(
  blocks: BlockObjectResponse[],
  depth = 0
): Promise<string> {
  let html = "";
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    switch (block.type) {
      case "paragraph": {
        const inner = richTextToHtml(block.paragraph.rich_text);
        html += inner
          ? `<p style="text-align:center;">${inner}</p>\n`
          : `<br/>\n`;
        break;
      }
      case "heading_1": {
        const inner = richTextToHtml(block.heading_1.rich_text);
        html += `<h1>${inner}</h1>\n`;
        break;
      }
      case "heading_2": {
        const inner = richTextToHtml(block.heading_2.rich_text);
        html += `<h2>${inner}</h2>\n`;
        break;
      }
      case "heading_3": {
        const inner = richTextToHtml(block.heading_3.rich_text);
        html += `<h3>${inner}</h3>\n`;
        break;
      }
      case "bulleted_list_item": {
        // Collect consecutive bulleted items into a <ul>
        const listItems: string[] = [];
        while (
          i < blocks.length &&
          blocks[i].type === "bulleted_list_item"
        ) {
          const b = blocks[i] as BlockObjectResponse & {
            type: "bulleted_list_item";
          };
          listItems.push(
            `<li>${richTextToHtml(b.bulleted_list_item.rich_text)}</li>`
          );
          i++;
        }
        html += `<ul>\n${listItems.join("\n")}\n</ul>\n`;
        continue; // i already advanced
      }
      case "numbered_list_item": {
        const listItems: string[] = [];
        while (
          i < blocks.length &&
          blocks[i].type === "numbered_list_item"
        ) {
          const b = blocks[i] as BlockObjectResponse & {
            type: "numbered_list_item";
          };
          listItems.push(
            `<li>${richTextToHtml(b.numbered_list_item.rich_text)}</li>`
          );
          i++;
        }
        html += `<ol>\n${listItems.join("\n")}\n</ol>\n`;
        continue;
      }
      case "image": {
        const img = block.image;
        const src =
          img.type === "external" ? img.external.url : img.file.url;
        const caption =
          img.caption.length > 0
            ? `<figcaption>${richTextToHtml(img.caption)}</figcaption>`
            : "";
        html += `<figure>\n  <img src="${escapeHtml(src)}" alt="${escapeHtml(img.caption.map((c) => c.plain_text).join(""))}" />\n${caption}\n</figure>\n`;
        break;
      }
      case "quote": {
        const inner = richTextToHtml(block.quote.rich_text);
        html += `<blockquote>${inner}</blockquote>\n`;
        break;
      }
      case "divider": {
        html += `<hr />\n`;
        break;
      }
      case "bookmark": {
        const url = block.bookmark.url;
        const caption = block.bookmark.caption.length > 0
          ? richTextToHtml(block.bookmark.caption)
          : escapeHtml(url);
        const hostname = new URL(url).hostname.replace(/^www\./, "");
        html +=
          `<div style="margin:1.5em auto;max-width:70%;">\n` +
          `  <a href="${escapeHtml(url)}" target="_blank" rel="noreferrer" style="display:flex;align-items:center;gap:16px;border:1px solid #e0e0e0;border-radius:12px;padding:12px 16px;text-decoration:none;color:inherit;cursor:pointer;background:#fafafa;">\n` +
          `    <div>\n` +
          `      <p style="margin:0 0 2px;font-size:0.75em;color:#999;">${escapeHtml(hostname)}</p>\n` +
          `      <p style="margin:0 0 2px;font-weight:700;font-size:0.95em;color:#222;">${caption}</p>\n` +
          `    </div>\n` +
          `  </a>\n` +
          `</div>\n`;
        break;
      }
      case "code": {
        const lang = block.code.language || "";
        const code = escapeHtml(
          block.code.rich_text.map((t) => t.plain_text).join("")
        );
        html += `<pre><code class="language-${lang}">${code}</code></pre>\n`;
        break;
      }
      case "callout": {
        const inner = richTextToHtml(block.callout.rich_text);
        html += `<p style="background:#fff9e6;border-left:4px solid #f0c040;padding:1em;">${inner}</p>\n`;
        break;
      }
      case "toggle": {
        const inner = richTextToHtml(block.toggle.rich_text);
        html += `<details><summary>${inner}</summary></details>\n`;
        break;
      }
      default:
        break;
    }

    i++;
  }

  return html;
}

/** Fetch all blocks for a page (handles pagination) */
async function fetchAllBlocks(pageId: string): Promise<BlockObjectResponse[]> {
  const results: BlockObjectResponse[] = [];
  let cursor: string | undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
      ...(cursor ? { start_cursor: cursor } : {}),
    });

    for (const block of response.results) {
      if (isFullBlock(block)) results.push(block);
    }

    cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined;
  } while (cursor);

  return results;
}

/** Read current post IDs from posts-data.ts to avoid duplicates */
function getExistingPostIds(filePath: string): Set<number> {
  const content = fs.readFileSync(filePath, "utf-8");
  const ids = new Set<number>();
  const re = /\bid:\s*(\d+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) {
    ids.add(Number(m[1]));
  }
  return ids;
}

/**
 * Replace an existing post block (matched by id) in-place within the source string.
 * Works for both hand-written and Notion-synced posts.
 */
function replacePostInSource(source: string, postId: number, newPostStr: string): string {
  const idMarker = `    id: ${postId},`;
  const idPos = source.indexOf(idMarker);
  if (idPos === -1) {
    console.warn(`  ⚠ Post id ${postId} not found in posts-data.ts — skipping update.`);
    return source;
  }

  // Walk backwards from idPos to find `\n  {` (the post object's opening brace line)
  let blockStart = idPos - 1;
  while (blockStart > 0) {
    if (
      source[blockStart] === "\n" &&
      source[blockStart + 1] === " " &&
      source[blockStart + 2] === " " &&
      source[blockStart + 3] === "{"
    ) break;
    blockStart--;
  }

  // If preceded by `/* Notion sync */` comment, include it in the replaced range
  const commentLine = "\n  /* Notion sync */";
  if (source.slice(blockStart - commentLine.length, blockStart) === commentLine) {
    blockStart -= commentLine.length;
  }

  // Count braces from the opening `{` to find the matching closing `}`
  let i = blockStart;
  while (i < source.length && source[i] !== "{") i++;
  let depth = 0;
  while (i < source.length) {
    if (source[i] === "{") depth++;
    else if (source[i] === "}") { depth--; if (depth === 0) break; }
    i++;
  }
  let blockEnd = i + 1;
  if (source[blockEnd] === ",") blockEnd++;

  return source.slice(0, blockStart) + "\n" + newPostStr + "," + source.slice(blockEnd);
}

/** Serialize a Post object to a TypeScript literal string */
function serializePost(post: {
  id: number;
  title: string;
  authorName: string;
  dateText: string;
  viewsText: string;
  authorAvatarUrl: string;
  initialLikeCount: number;
  commentCount: number;
  articleHTML: string;
  bestComments: Array<{
    id: number;
    author: string;
    date: string;
    text: string;
    likes: number;
  }>;
}): string {
  const commentsStr = post.bestComments
    .map(
      (c, idx) =>
        `      {\n` +
        `        id: ${c.id},\n` +
        `        author: ${JSON.stringify(c.author)},\n` +
        `        date: ${JSON.stringify(c.date)},\n` +
        `        text: ${JSON.stringify(c.text)},\n` +
        `        likes: ${c.likes},\n` +
        `      }`
    )
    .join(",\n");

  return (
    `  /* Notion sync */\n` +
    `  {\n` +
    `    id: ${post.id},\n` +
    `    title: ${JSON.stringify(post.title)},\n` +
    `    authorName: ${JSON.stringify(post.authorName)},\n` +
    `    dateText: ${JSON.stringify(post.dateText)},\n` +
    `    viewsText: ${JSON.stringify(post.viewsText)},\n` +
    `    authorAvatarUrl: ${JSON.stringify(post.authorAvatarUrl)},\n` +
    `    initialLikeCount: ${post.initialLikeCount},\n` +
    `    commentCount: ${post.commentCount},\n` +
    `    articleHTML: \`\n${post.articleHTML}\`,\n` +
    `    bestComments: [\n${commentsStr}\n    ],\n` +
    `  }`
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const postsDataPath = path.resolve(process.cwd(), "lib/posts-data.ts");

  // 1. Query Notion DB for pages with status "배포 요청" OR "재배포 요청"
  console.log("Querying Notion DB for pages with status '배포 요청' or '재배포 요청'…");
  const queryResponse = await notion.databases.query({
    database_id: NOTION_DATABASE_ID!,
    filter: {
      or: [
        { property: "상태", status: { equals: "배포 요청" } },
        { property: "상태", status: { equals: "재배포 요청" } },
      ],
    },
  });

  const pages = queryResponse.results.filter(isFullPage) as PageObjectResponse[];
  console.log(`Found ${pages.length} page(s) to sync.`);

  if (pages.length === 0) {
    console.log("Nothing to sync.");
    return;
  }

  // 2. Get existing post IDs
  const existingIds = getExistingPostIds(postsDataPath);
  console.log(`Existing post IDs: ${[...existingIds].join(", ")}`);

  const newPostStrings: string[] = [];
  const updatedPosts: Array<{ postId: number; postStr: string }> = [];

  for (const page of pages) {
    const postId = uuidToId(page.id);
    const pageStatus = (page.properties["상태"] as { type: "status"; status: { name: string } | null } | undefined)?.status?.name ?? "";
    const isRedeployment = pageStatus === "재배포 요청";

    if (!isRedeployment && existingIds.has(postId)) {
      console.log(`Skipping page ${page.id} (already synced as id ${postId})`);
      continue;
    }

    console.log(`${isRedeployment ? "Updating" : "Processing"} page ${page.id} → id ${postId}…`);

    // Extract properties (try various common property names)
    const title =
      getPropText(page, "Name", "Title", "제목", "title") || "Untitled";

    const authorName =
      getPropText(page, "작성자 이름", "Author", "작성자", "authorName", "Author Name") ||
      "익명";

    const rawDate =
      getPropText(page, "Date", "날짜", "Published", "발행일", "Created") ||
      page.created_time;
    const dateText = formatDate(rawDate);

    const viewsRaw = (page.properties["조회수"] as { type: "number"; number: number | null } | undefined)?.number ?? 0;
    const viewsText = `${viewsRaw.toLocaleString("ko-KR")} 읽음`;

    const authorAvatarUrl =
      getPropText(page, "Avatar", "Profile", "authorAvatarUrl", "AvatarUrl") ||
      "/images/blog/profile-nww.jpg";

    const initialLikeCount =
      Number(getPropText(page, "좋아요 수", "Likes", "좋아요", "initialLikeCount")) || 0;

    const commentCount =
      Number(getPropText(page, "댓글 수", "Comments", "댓글수", "commentCount")) || 0;

    // Build bestComments from 댓글1/2/3 Notion properties
    const bestComments = (["댓글1", "댓글2", "댓글3"] as const)
      .map((key, idx) => {
        const text = getPropText(page, key);
        if (!text) return null;
        return {
          id: idx + 1,
          author: pickRandom(KOREAN_NICKNAMES),
          date: dateText,
          text,
          likes: randomLikes(),
        };
      })
      .filter((c): c is NonNullable<typeof c> => c !== null);

    // 3. Fetch blocks and convert to HTML
    const blocks = await fetchAllBlocks(page.id);
    const articleHTML = await blocksToHtml(blocks);

    const post = {
      id: postId,
      title,
      authorName,
      dateText,
      viewsText,
      authorAvatarUrl,
      initialLikeCount,
      commentCount,
      articleHTML,
      bestComments,
    };

    const postStr = serializePost(post);
    if (isRedeployment) {
      updatedPosts.push({ postId, postStr });
    } else {
      newPostStrings.push(postStr);
    }

    // Update the Notion page's "상태" to "배포 완료" and set "url"
    await notion.pages.update({
      page_id: page.id,
      properties: {
        상태: { status: { name: "배포 완료" } },
        url: { rich_text: [{ text: { content: `https://castdaily.com/${postId}` } }] },
      },
    });
    console.log(`  ✓ "${title}" ${isRedeployment ? "updated" : "added"} and marked as '배포 완료'.`);
  }

  if (newPostStrings.length === 0 && updatedPosts.length === 0) {
    console.log("No changes to apply.");
    return;
  }

  // 4. Apply changes to posts-data.ts
  let source = fs.readFileSync(postsDataPath, "utf-8");

  // 4a. Replace updated posts in-place
  for (const { postId, postStr } of updatedPosts) {
    source = replacePostInSource(source, postId, postStr);
    console.log(`  ↺ Replaced post id ${postId} in posts-data.ts`);
  }

  // 4b. Append new posts before the closing `];`
  // Find the last `];` that closes the posts array
  if (newPostStrings.length > 0) {
    const insertionMarker = /(\];\s*\n\s*\/\* ─+\s*Helper)/;
    const newPostsBlock = newPostStrings.join(",\n\n") + ",\n\n";

    if (insertionMarker.test(source)) {
      source = source.replace(insertionMarker, `\n${newPostsBlock}$1`);
    } else {
      const lastBracket = source.lastIndexOf("];");
      if (lastBracket === -1) {
        console.error("Could not find the posts array closing bracket in posts-data.ts");
        process.exit(1);
      }
      source =
        source.slice(0, lastBracket) + "\n" + newPostsBlock + source.slice(lastBracket);
    }
  }

  fs.writeFileSync(postsDataPath, source, "utf-8");
  console.log(`\nWrote to lib/posts-data.ts — ${newPostStrings.length} added, ${updatedPosts.length} updated.`);

  // 5. Git commit & push
  const parts = [
    newPostStrings.length > 0 ? `add ${newPostStrings.length}` : "",
    updatedPosts.length > 0 ? `update ${updatedPosts.length}` : "",
  ].filter(Boolean).join(", ");

  console.log("\nCommitting and pushing…");
  execSync("git add lib/posts-data.ts", { stdio: "inherit" });
  execSync(
    `git commit -m "sync: ${parts} post(s) from Notion"`,
    { stdio: "inherit" }
  );
  execSync("git push", { stdio: "inherit" });
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
