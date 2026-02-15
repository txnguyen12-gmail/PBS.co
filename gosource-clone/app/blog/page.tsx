import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Blog - Insights & Inspiration | TanWinWin",
  description: "Explore insights on slabs, quartz, porcelain, stone fabrication, pricing trends, and sourcing strategies for trade professionals.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights & Inspiration
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Expert insights on construction supplies, project highlights, and company news.
          </p>
        </div>
      </section>

      <BlogGrid />
    </>
  );
}
