"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blog-posts";

export default function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 mb-4">
          <div className="w-full h-full bg-gradient-to-br from-charcoal/10 to-slate flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <span className="text-navy/20 text-4xl font-bold">TanWinWin</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">{post.date}</span>
            <span className="px-2 py-0.5 text-xs font-medium bg-accent-orange/10 text-accent-orange rounded-full">
              {post.type}
            </span>
          </div>
          <h3 className="text-lg font-bold text-navy group-hover:text-accent-orange transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="px-2 py-0.5 text-xs bg-surface-light text-gray-500 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
