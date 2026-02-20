"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LayoutGrid, Layers, Droplets, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: LayoutGrid,
    title: "Kitchen Cabinets",
    description:
      "Shaker, flat-panel, and modern gloss styles. Soft-close hardware, plywood construction, KCMA certified.",
    href: "/collections/cabinets",
    color: "from-accent-orange to-amber-600",
    iconBg: "bg-accent-orange/15",
  },
  {
    icon: Layers,
    title: "SPC/LVP Flooring",
    description:
      "26 colors of waterproof SPC flooring. Click-lock install, 5.5mm thick with IXPE pad attached.",
    href: "/collections/spc-flooring",
    color: "from-accent-green to-emerald-700",
    iconBg: "bg-accent-green/15",
  },
  {
    icon: Droplets,
    title: "Sanitaryware",
    description:
      "Smart toilets, one-piece and two-piece toilets, basins, and vanity sets. Anti-bacterial glaze, water-saving flush.",
    href: "/collections/sanitaryware",
    color: "from-accent-gold to-amber-700",
    iconBg: "bg-accent-gold/15",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Our Core Products
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-charcoal mb-4">
            Everything You Need to Build
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trade-grade cabinets, WPC wall panels, and ceiling systems — sourced
            directly for contractors and builders at wholesale prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                href={category.href}
                className="group block h-full bg-surface-light rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 ${category.iconBg} rounded-xl flex items-center justify-center mb-6`}
                >
                  <category.icon className="w-7 h-7 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-orange group-hover:gap-3 transition-all">
                  Browse Collection
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
