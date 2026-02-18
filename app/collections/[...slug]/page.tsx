import Link from "next/link";
import { Package, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

function formatCategoryName(slug: string[]): string {
  const raw = slug[slug.length - 1];
  return raw
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function CollectionsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const categoryName = formatCategoryName(slug);

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-surface-light">
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 bg-accent-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Package className="w-8 h-8 text-accent-orange" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {categoryName}
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          Our {categoryName.toLowerCase()} collection is coming soon. Sign up to get notified when products are available, or contact our team for a custom quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/sign-up" variant="primary" size="lg">
            Get Notified
          </Button>
          <Button href="/ai-assistant" variant="outline" size="lg">
            Ask Our Team
          </Button>
        </div>
        <Link
          href="/surfaces"
          className="inline-flex items-center gap-1.5 text-sm text-accent-orange hover:underline mt-8"
        >
          Browse surfaces overview
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
