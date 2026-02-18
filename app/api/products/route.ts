import { NextRequest, NextResponse } from "next/server";
import { products, productCategories } from "@/data/products";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  let filtered = products;

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({
    products: filtered,
    categories: productCategories,
    total: filtered.length,
  });
}
