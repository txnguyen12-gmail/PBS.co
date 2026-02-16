"use client";

import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts, blogCategories } from "@/data/blog-posts";

const INITIAL_COUNT = 6;

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.categories.includes(activeCategory));

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider text-center mb-4">
          Our Blog
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Insights & Inspiration for Your Next Project
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Welcome to our blog — your source for expert insights on construction supplies, trade tips, and project inspiration.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(INITIAL_COUNT);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === category
                  ? "bg-navy text-white"
                  : "bg-surface-light text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {visiblePosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No posts found in this category.</p>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-3 rounded-full text-base font-semibold bg-surface-light text-navy hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
