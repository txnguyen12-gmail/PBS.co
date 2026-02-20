export type { Product, ProductCategory, ProductSpec, ProductVariant } from "./types";
export { productCategories } from "./categories";

import { Product, ProductCategory } from "./types";
import { productCategories } from "./categories";
import { cabinets } from "./cabinets";
import { quartzSlabs } from "./quartz-slabs";
import { spcFlooring } from "./spc-flooring";
import { pvcWallPanels } from "./pvc-wall-panels";
import { wpcOutdoor } from "./wpc-outdoor";
import { sanitaryware } from "./sanitaryware";
import { faucets } from "./faucets";
import { interiorDoors } from "./interior-doors";
import { showerBath } from "./shower-bath";

const allProducts: Product[] = [
  ...cabinets,
  ...quartzSlabs,
  ...spcFlooring,
  ...pvcWallPanels,
  ...wpcOutdoor,
  ...sanitaryware,
  ...faucets,
  ...interiorDoors,
  ...showerBath,
];

export function getAllProducts(): Product[] {
  return allProducts;
}

export function getProductsByCategory(categoryId: string): Product[] {
  return allProducts.filter((p) => p.category === categoryId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

export function getSubcategories(categoryId: string): string[] {
  const category = productCategories.find((c) => c.id === categoryId);
  return category?.subcategories ?? [];
}

export function getProductsBySubcategory(
  categoryId: string,
  subcategory: string
): Product[] {
  return allProducts.filter(
    (p) => p.category === categoryId && p.subcategory === subcategory
  );
}
