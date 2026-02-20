"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";

interface ProductGridProps {
  products: Product[];
  subcategories: string[];
}

export default function ProductGrid({
  products,
  subcategories,
}: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = activeFilter
    ? products.filter((p) => p.subcategory === activeFilter)
    : products;

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductFilters
          subcategories={subcategories}
          active={activeFilter}
          onSelect={setActiveFilter}
        />

        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center py-12">
            No products found for this filter.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
