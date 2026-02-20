import { Metadata } from "next";
import CollectionsHero from "@/components/collections/CollectionsHero";
import CategoryGrid from "@/components/collections/CategoryGrid";
import { productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Collections | Perfect Building Supply",
  description:
    "Browse our full catalog of building materials — cabinets, quartz slabs, SPC flooring, sanitaryware, and more. Trade-grade products for contractors and builders.",
};

export default function CollectionsPage() {
  return (
    <>
      <CollectionsHero />
      <CategoryGrid categories={productCategories} />
    </>
  );
}
