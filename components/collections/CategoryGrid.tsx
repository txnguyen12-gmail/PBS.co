"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
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
import { ProductCategory } from "@/data/products";

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

export default function CategoryGrid({
  categories,
}: {
  categories: ProductCategory[];
}) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => {
            const Icon = categoryIcons[category.id] || Layers;
            return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={`/collections/${category.slug}`}
                className="group block rounded-2xl overflow-hidden bg-surface-light border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 bg-white/80 rounded-2xl shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-accent-orange/60" />
                      </div>
                      <span className="text-gray-500 text-sm font-medium">
                        {category.name}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-orange group-hover:gap-3 transition-all">
                    Browse Collection
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
