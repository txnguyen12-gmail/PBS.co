"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.05, 0.3) }}
    >
      <div className="group rounded-xl overflow-hidden bg-white border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                    />
                  </svg>
                </div>
                <p className="text-gray-400 text-xs">{product.name}</p>
              </div>
            </div>
          )}

          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-md ${
                product.badge === "Best Seller"
                  ? "bg-accent-orange text-white"
                  : "bg-charcoal text-white"
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <p className="text-xs text-accent-orange font-medium mb-1">
            {product.subcategory}
          </p>
          <h3 className="text-base font-bold text-charcoal mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Highlights */}
          {product.highlights.length > 0 && (
            <ul className="text-xs text-gray-500 space-y-1 mb-4">
              {product.highlights.slice(0, 2).map((h, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-accent-orange mt-0.5 shrink-0">
                    &bull;
                  </span>
                  <span className="line-clamp-1">{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <div className="mt-auto pt-3">
            <Link
              href="/sign-up"
              className="block text-center w-full px-4 py-2 text-sm font-bold bg-accent-orange text-white rounded-md hover:bg-brick transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
