import React from "react";
import Link from "next/link";
import { DEMO_BLOG_POSTS } from "@/constants";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-slate-200 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-10">
          <p className="text-xs font-orbitron tracking-[0.3em] text-slate-500 uppercase mb-3">
            Intel Archive
          </p>
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            DCITC Intel
          </h1>
        </header>

        <div className="space-y-4">
          {DEMO_BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-white/10 hover:border-white/40 bg-dc-panel px-5 py-4 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-orbitron text-lg md:text-xl text-white">
                  {post.title}
                </h2>
                <span className="text-xs font-orbitron tracking-[0.25em] text-slate-500 uppercase">
                  {post.date}
                </span>
              </div>
              <p className="text-slate-400 text-sm font-rajdhani">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
