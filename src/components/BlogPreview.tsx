"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./UI/SectionTitle";
import { DEMO_BLOG_POSTS } from "../constants";

const BlogPreview: React.FC = () => {
  return (
    <section id="intel" className="py-24 bg-dc-dark border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Latest Intel"
          subtitle="Fresh logs, write‑ups, and stories from the DCITC crew"
        />

        <div className="grid gap-6 md:grid-cols-3 relative z-10">
          {DEMO_BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-dc-panel border border-white/10 p-6 flex flex-col justify-between hover:border-white/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="relative w-full h-40 mb-2 overflow-hidden border border-white/10 bg-black/40">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-orbitron tracking-[0.25em] uppercase text-slate-500">
                  <span>{post.tag}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg md:text-xl font-orbitron text-white">
                  {post.title}
                </h3>
                <p className="font-rajdhani text-slate-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex text-xs font-orbitron tracking-[0.25em] text-slate-300 uppercase hover:text-white"
              >
                Read Log →
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex px-8 py-3 border border-white/20 text-white font-orbitron text-xs tracking-[0.3em] uppercase hover:bg-white/10 transition-colors -skew-x-10"
          >
            <span className="skew-x-10">View All Intel</span>
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom,white,transparent_60%)]" />
    </section>
  );
};

export default BlogPreview;
