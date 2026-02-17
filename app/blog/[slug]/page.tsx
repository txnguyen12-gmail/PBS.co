import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import BlogCard from "@/components/blog/BlogCard";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found | TanWinTan" };
  return {
    title: `${post.title} | TanWinTan Blog`,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.categories.some((c) => post.categories.includes(c)))
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-1.5 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Homepage
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-gray-700 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-600 truncate max-w-xs">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-white pt-10 pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta: Date, Type, Categories */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm text-gray-400 font-medium">{post.date}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="px-2.5 py-0.5 text-xs font-medium bg-accent-orange/10 text-accent-orange rounded-full">
              {post.type}
            </span>
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-500 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-orange/20 to-accent-gold/20 flex items-center justify-center">
              <span className="text-accent-orange font-bold text-sm">{post.author.charAt(0)}</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{post.author}</p>
              <p className="text-xs text-gray-400">Procurement Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="bg-white pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 relative">
            {post.image && post.image.startsWith("http") ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-300 text-4xl font-bold">TanWinTan</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-6 text-base leading-7">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags at bottom */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${cat}`}
                  className="px-3 py-1.5 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors font-medium"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rp, i) => (
                <BlogCard key={rp.slug} post={rp} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
