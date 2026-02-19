"use client";

import type { ProductCard as ProductCardType } from "./types";

interface ProductCardProps {
  product: ProductCardType;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {product.primary_image_url ? (
        <div className="h-32 bg-gray-50">
          <img
            src={product.primary_image_url}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="flex h-32 items-center justify-center bg-gray-50">
          <span className="text-2xl text-gray-300">
            {product.category?.[0] ?? "P"}
          </span>
        </div>
      )}

      <div className="p-3">
        <h4 className="text-sm font-semibold text-charcoal leading-tight">
          {product.name}
        </h4>
        <p className="mt-0.5 text-xs text-gray-500">
          SKU: {product.sku} &middot; {product.category}
        </p>

        {product.attributes.length > 0 && (
          <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1">
            {product.attributes.slice(0, 4).map((attr) => (
              <div key={attr.key} className="text-xs">
                <span className="text-gray-500">{attr.key}: </span>
                <span className="font-medium text-gray-800">
                  {attr.value}
                  {attr.unit ? ` ${attr.unit}` : ""}
                </span>
              </div>
            ))}
          </div>
        )}

        {product.price_display && (
          <div className="mt-2">
            <span className="text-sm font-bold text-charcoal">
              {product.price_display}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
