"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Layers,
  Footprints,
  PanelLeft,
  TreePine,
  Droplets,
  Droplet,
  DoorOpen,
  ShowerHead,
} from "lucide-react";
import { Product } from "@/data/products";

const categoryIcons: Record<string, React.ElementType> = {
  cabinets: LayoutGrid,
  "quartz-slabs": Layers,
  "spc-flooring": Footprints,
  "pvc-wall-panels": PanelLeft,
  "wpc-outdoor": TreePine,
  sanitaryware: Droplets,
  faucets: Droplet,
  "interior-doors": DoorOpen,
  "shower-bath": ShowerHead,
};

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const Icon = categoryIcons[product.category] || Layers;

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
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-150 p-6">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-accent-orange/70" />
              </div>
              <p className="text-gray-400 text-xs text-center font-medium line-clamp-2 max-w-[80%]">
                {product.name}
              </p>
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
