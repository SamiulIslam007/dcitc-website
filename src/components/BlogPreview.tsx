import React from "react";
import Constants from "../constants";
import MotionSection from "./MotionSection";

const DEMO_BLOG_POSTS = Constants.DEMO_BLOG_POSTS;

const BlogPreview: React.FC = () => {
  return (
    <MotionSection
      id="intel"
      title="Blogs"
      subtitle="Latest Insights from the DCITC"
      className="py-24 bg-dc-dark relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DEMO_BLOG_POSTS.map((post) => (
          <div
            key={post.slug}
            className="p-4 border border-white/10 hover:border-white/30 transition-all"
          >
            <h3 className="text-xl font-bold text-white">{post.title}</h3>
            <p className="text-sm text-slate-400">{post.excerpt}</p>
            <span className="text-xs mt-2 block text-slate-500">
              {post.date}
            </span>
          </div>
        ))}
      </div>
    </MotionSection>
  );
};

export default BlogPreview;
