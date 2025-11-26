import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { DEMO_BLOG_POSTS } from "@/constants";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return DEMO_BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = DEMO_BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-slate-200 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="text-xs font-orbitron tracking-[0.3em] uppercase text-slate-500 hover:text-slate-300 mb-6 inline-block"
        >
          6 Back to Intel
        </Link>

        <article>
          <header className="mb-8">
            <p className="text-xs font-orbitron tracking-[0.3em] text-slate-500 uppercase mb-3">
              {post.tag} • {post.date}
            </p>
            <h1 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
              {post.title}
            </h1>
          </header>

          <div className="relative w-full h-64 mb-8 border border-white/10 bg-black/40 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none font-rajdhani text-slate-200">
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </div>
  );
}
