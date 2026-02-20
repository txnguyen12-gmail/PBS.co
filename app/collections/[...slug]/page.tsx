import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  productCategories,
  getCategoryBySlug,
  getProductsByCategory,
  getSubcategories,
} from "@/data/products";
import CategoryHeader from "@/components/collections/CategoryHeader";
import ProductGrid from "@/components/collections/ProductGrid";

export async function generateStaticParams() {
  return productCategories.map((cat) => ({
    slug: [cat.slug],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug[0]);
  if (!category) return { title: "Not Found" };

  return {
    title: `${category.name} | Perfect Building Supply`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug[0]);

  if (!category) notFound();

  const products = getProductsByCategory(category.id);
  const subcategories = getSubcategories(category.id);

  return (
    <>
      <CategoryHeader
        name={category.name}
        description={category.description}
        productCount={products.length}
      />
      <ProductGrid products={products} subcategories={subcategories} />
    </>
  );
}
