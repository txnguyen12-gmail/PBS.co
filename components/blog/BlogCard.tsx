"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blog-posts";

export default function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        {/* Feature Image */}
        <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
          {post.image && post.image.startsWith("http") ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <span className="text-gray-300 text-3xl font-bold">TanWinTan</span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-5 space-y-3">
          {/* Date and Type Badge */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-medium">{post.date}</span>
            <span className="px-2.5 py-0.5 text-xs font-medium bg-accent-orange/10 text-accent-orange rounded-full">
              {post.type}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-gray-900 group-hover:text-accent-orange transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{post.excerpt}</p>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="px-2.5 py-0.5 text-xs bg-gray-100 text-gray-500 rounded-full font-medium"
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
