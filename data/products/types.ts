export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductVariant {
  name: string;
  sku: string;
  specs?: ProductSpec[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  description: string;
  highlights: string[];
  specs: ProductSpec[];
  image?: string;
  variants?: ProductVariant[];
  tags: string[];
  badge?: "Best Seller" | "New";
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  subcategories: string[];
}
