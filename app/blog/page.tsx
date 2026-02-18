import BlogGrid from "@/components/blog/BlogGrid";
import Link from "next/link";

export const metadata = {
  title: "Blog - Insights & Inspiration | Perfect Building Supply Co.",
  description: "Explore insights on slabs, quartz, porcelain, stone fabrication, pricing trends, and sourcing strategies for trade professionals.",
};

export default function BlogPage() {
  return (
    <>
      {/* Heading Section - Clean white, no dark hero */}
      <section className="bg-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gray-600 transition-colors">Homepage</Link>
            <span>&gt;</span>
            <span className="text-gray-600">Blog</span>
          </nav>
          <p className="text-sm text-gray-500 font-medium mb-3 uppercase tracking-wide">
            Our Blog
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Insights & Inspiration for Your Next Project
          </h1>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Welcome to our source for expert insights on construction supplies, project highlights, and latest trends.
          </p>
        </div>
      </section>

      <BlogGrid />
    </>
  );
}
