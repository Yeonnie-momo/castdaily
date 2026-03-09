"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { Heart, MessageCircle, Share2, UserPlus, MoreHorizontal, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { posts, getPostById, type Post } from "@/lib/posts-data";

/* ═══════════════════════════════════════════════════════════════ */
/*                     CLIENT COMPONENT                            */
/* ═══════════════════════════════════════════════════════════════ */

export default function PostPageClient() {
  const params = useParams();
  const router = useRouter();

  const rawId = params.id as string;
  const numericId = Number(rawId);

  /* ── state ── */
  const [post, setPost] = useState<Post | null>(null);
  const [likeCount, setLikeCount] = useState(0);
  const [likeAnimating, setLikeAnimating] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  const commentRef = useRef<HTMLDivElement>(null);

  /* ── resolve post or redirect ── */
  useEffect(() => {
    if (!rawId) return;

    // If id is not a valid number, redirect to first post
    if (isNaN(numericId)) {
      router.replace(`/${posts[0].id}`);
      return;
    }

    const found = getPostById(numericId);
    if (found) {
      setPost(found);
      setLikeCount(found.initialLikeCount);
    } else {
      // Post not found → redirect to first post
      router.replace(`/${posts[0].id}`);
    }
  }, [rawId, numericId, router]);

  /* ── CTA click → Meta Pixel Lead event ── */
  const articleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = articleRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.('a[href*="foind.co.kr"]');
      if (anchor) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).fbq?.('track', 'Lead');
      }
    };
    el.addEventListener('click', handler);
    return () => el.removeEventListener('click', handler);
  }, [post]);

  /* ── reading progress bar ── */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setReadProgress(Math.min((scrollTop / docHeight) * 100, 100));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── handlers ── */
  const handleLike = useCallback(() => {
    setLikeCount((c) => c + 1);
    setLikeAnimating(true);
    setTimeout(() => setLikeAnimating(false), 300);
  }, []);

  const scrollToComments = useCallback(() => {
    commentRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const requireLogin = useCallback(() => {
    setLoginDialogOpen(true);
  }, []);

  const handleNoop = useCallback(() => {
    toast("로그인이 필요합니다.");
  }, []);

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast("복사되었습니다");
    } catch {
      toast("복사에 실패했습니다.");
    }
  }, []);

  /* ── loading / redirecting state ── */
  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-foreground" />
      </div>
    );
  }

  /* ═══════════════════════════  RENDER  ═══════════════════════════ */
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Reading Progress Bar ── */}
      <div
        className="fixed top-0 left-0 z-50 h-[3px] bg-[hsl(24,80%,50%)] transition-[width] duration-150"
        style={{ width: `${readProgress}%` }}
      />

      {/* ══════════ HEADER ══════════ */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          {/* Logo — not clickable */}
          <span className="cursor-default select-none text-xl font-extrabold tracking-tight text-foreground">
            CASTDAILY
          </span>

          {/* Right menu */}
          <nav className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground gap-1"
              onClick={requireLogin}
            >
              <UserPlus className="h-4 w-4" />
              <span className="hidden sm:inline">{"+ 팔로우"}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-foreground hidden sm:inline-flex"
              onClick={handleNoop}
            >
              콘텐츠
            </Button>

            {/* Share Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground gap-1"
                >
                  <Share2 className="h-4 w-4" />
                  <span className="hidden sm:inline">공유하기</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-56 bg-background text-foreground"
                align="end"
              >
                <p className="mb-2 text-sm font-medium text-foreground">
                  공유하기
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 text-foreground"
                  onClick={handleCopyLink}
                >
                  <Link2 className="h-4 w-4" /> 링크 복사
                </Button>
              </PopoverContent>
            </Popover>

            <Button
              size="sm"
              className="bg-[hsl(24,80%,50%)] text-white hover:bg-[hsl(24,80%,42%)] hidden sm:inline-flex"
              onClick={handleNoop}
            >
              포스트 쓰기
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-foreground"
              onClick={handleNoop}
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">더보기</span>
            </Button>
          </nav>
        </div>
      </header>

      {/* ══════════ TITLE AREA ══════════ */}
      <section className="mx-auto max-w-[760px] px-4 pt-10 pb-6 text-center">
        <h1 className="text-balance text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl text-foreground">
          {post.title}
        </h1>

        <div className="mt-6 flex flex-col items-center gap-3">
          {/* Author avatar */}
          <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
            <img
              src={post.authorAvatarUrl}
              alt={`${post.authorName} 프로필`}
              className="h-full w-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              {post.authorName}
            </span>
            {" · "}
            {post.dateText}
            {" · "}
            <span>{post.viewsText}</span>
          </div>
        </div>

        <Separator className="mt-6" />
      </section>

      {/* ══════════ ARTICLE BODY ══════════ */}
      <main className="mx-auto max-w-[760px] px-4 pb-8">
        <article
          ref={articleRef}
          className="article-body"
          dangerouslySetInnerHTML={{ __html: post.articleHTML }}
        />

        {/* ── Like / Comment Summary Bar ── */}
        <div className="my-8 flex items-center gap-4 rounded-lg border border-border bg-muted/50 px-4 py-3">
          <button
            onClick={handleLike}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-[hsl(0,70%,55%)]"
            aria-label="좋아요"
          >
            <Heart
              className={`h-5 w-5 transition-transform ${likeAnimating ? "scale-125 fill-[hsl(0,70%,55%)] text-[hsl(0,70%,55%)]" : ""}`}
            />
            <span>{likeCount.toLocaleString()}</span>
          </button>

          <button
            onClick={scrollToComments}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="댓글로 이동"
          >
            <MessageCircle className="h-5 w-5" />
            <span>{post.commentCount}</span>
          </button>

          <button
            onClick={handleNoop}
            className="ml-auto text-muted-foreground hover:text-foreground"
            aria-label="더보기"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </main>

      {/* ══════════ AUTHOR PROFILE BOX ══════════ */}
      <section className="mx-auto max-w-[760px] px-4 pb-8">
        <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
          <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-muted">
            <img
              src={post.authorAvatarUrl}
              alt={`${post.authorName} 프로필`}
              className="h-full w-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-foreground">{post.authorName}</p>
            <p className="text-sm text-muted-foreground">팔로워 4,821</p>
          </div>
          <Button
            className="bg-[hsl(24,80%,50%)] text-white hover:bg-[hsl(24,80%,42%)] gap-1"
            onClick={requireLogin}
          >
            <UserPlus className="h-4 w-4" /> {"+ 팔로우"}
          </Button>
        </div>
      </section>

      {/* ══════════ COMMENTS AREA ══════════ */}
      <section
        ref={commentRef}
        className="mx-auto max-w-[760px] px-4 pb-12"
      >
        <Separator className="mb-6" />

        <h2 className="mb-4 text-lg font-bold text-foreground">
          댓글 {post.commentCount}
        </h2>

        {/* Comment textarea */}
        <div className="mb-6">
          <Textarea
            placeholder="댓글을 작성해보세요."
            className="min-h-[80px] resize-none bg-muted/40 text-foreground cursor-pointer"
            readOnly
            onClick={requireLogin}
            onFocus={(e) => {
              e.target.blur();
              requireLogin();
            }}
          />
          <div className="mt-2 flex justify-end">
            <Button
              size="sm"
              className="bg-[hsl(24,80%,50%)] text-white hover:bg-[hsl(24,80%,42%)]"
              onClick={requireLogin}
            >
              등록
            </Button>
          </div>
        </div>

        {/* Tabs — BEST / 전체 */}
        <div className="mb-4 flex gap-2 border-b border-border">
          <button className="border-b-2 border-[hsl(24,80%,50%)] px-3 pb-2 text-sm font-semibold text-foreground">
            BEST댓글
          </button>
          <button
            className="px-3 pb-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={requireLogin}
          >
            전체댓글
          </button>
        </div>

        {/* BEST comments */}
        <div className="flex flex-col gap-5">
          {post.bestComments.map((c) => (
            <div key={c.id} className="flex gap-3">
              <div className="mt-0.5 h-9 w-9 flex-shrink-0 rounded-full bg-muted" />
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-foreground">
                    {c.author}
                  </span>
                  <span className="text-muted-foreground">{c.date}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-foreground">
                  {c.text}
                </p>
                <div className="mt-1.5 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5" /> {c.likes}
                  </span>
                  <button
                    className="hover:text-foreground"
                    onClick={requireLogin}
                  >
                    답글
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={requireLogin}
          className="mt-6 text-sm font-medium text-[hsl(24,80%,50%)] hover:underline"
        >
          전체 댓글 보기
        </button>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-[760px] px-4 py-8">
          <div className="mb-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">CASTDAILY</p>
            <p className="mt-1">
              {"서울특별시 강남구 테헤란로 123 캐스트빌딩 8층"}
            </p>
            <p>{"문의: contact@castdaily.com"}</p>
          </div>

          <div className="mb-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <button className="hover:text-foreground" onClick={handleNoop}>
              이용약관
            </button>
            <button className="hover:text-foreground" onClick={handleNoop}>
              개인정보처리방침
            </button>
            <button className="hover:text-foreground" onClick={handleNoop}>
              고객센터
            </button>
          </div>

          {/* 광고/제휴 고지 Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="disclosure" className="border-b-0">
              <AccordionTrigger className="py-2 text-xs text-muted-foreground hover:text-foreground hover:no-underline">
                광고/제휴 고지
              </AccordionTrigger>
              <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                <ul className="list-disc space-y-1 pl-4">
                  <li>
                    본 페이지는 광고성 콘텐츠를 포함할 수 있습니다.
                  </li>
                  <li>
                    본문 내 링크를 통해 구매가 발생할 경우 제휴 수익이
                    발생할 수 있습니다.
                  </li>
                  <li>
                    {"이용자에게 추가 비용이 발생하지 않습니다."}
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="mt-4 text-xs text-muted-foreground">
            {"© 2025 CASTDAILY. All rights reserved."}
          </p>
        </div>
      </footer>

      {/* ══════════ LOGIN REQUIRED DIALOG ══════════ */}
      <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
        <DialogContent className="sm:max-w-sm bg-background text-foreground">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              로그인이 필요합니다
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              이 기능을 사용하려면 로그인이 필요합니다.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button variant="outline" size="sm" className="text-foreground">
                닫기
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
