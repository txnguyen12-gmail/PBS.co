import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Blog - Insights & Inspiration | TanWinWin",
  description: "Explore insights on slabs, quartz, porcelain, stone fabrication, pricing trends, and sourcing strategies for trade professionals.",
};

export default function BlogPage() {
  return (
    <>
      {/* Heading Section - Clean white, no dark hero */}
      <section className="bg-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 font-medium mb-3 uppercase tracking-wide">
            Our Blog
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Insights & Inspiration for Your Next Project
          </h1>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Expert insights on construction supplies, project highlights, sourcing strategies, and industry trends for trade professionals.
          </p>
        </div>
      </section>

      <BlogGrid />
    </>
  );
}
