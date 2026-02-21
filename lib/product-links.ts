import { getAllProducts, productCategories } from "@/data/products";

export interface ProductLink {
  name: string;
  url: string;
}

/** Build a list of product names → category page URLs, sorted longest-first for matching */
function buildProductLinks(): ProductLink[] {
  const categorySlugMap = new Map(
    productCategories.map((c) => [c.id, c.slug]),
  );

  const links = getAllProducts().map((p) => ({
    name: p.name,
    url: `/collections/${categorySlugMap.get(p.category) ?? p.category}`,
  }));

  // Also add category names as linkable
  for (const cat of productCategories) {
    links.push({ name: cat.name, url: `/collections/${cat.slug}` });
  }

  // Sort longest name first to avoid partial matches
  links.sort((a, b) => b.name.length - a.name.length);

  return links;
}

// Computed once at import time (static data, no side effects)
export const productLinks: ProductLink[] = buildProductLinks();

/** Build a regex that matches any product/category name (longest first, word boundaries) */
export const productLinkRegex: RegExp = new RegExp(
  `(${productLinks.map((p) => p.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g",
);

/** Lookup URL for a product name */
export function getProductUrl(name: string): string | undefined {
  return productLinks.find((p) => p.name === name)?.url;
}
