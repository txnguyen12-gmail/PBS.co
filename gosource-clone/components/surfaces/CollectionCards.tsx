"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const collections = [
  {
    name: "Slabs",
    image: "https://images.prismic.io/gs-web/ZrBk3rokW0aN5CB3_slabs-collection.jpg",
    href: "/collections/slabs",
    description: "Premium quartz, natural stone & porcelain slabs",
  },
  {
    name: "Tiles",
    image: "https://images.prismic.io/gs-web/ZrBk3rokW0aN5CB3_tiles-collection.jpg",
    href: "/collections/tile",
    description: "Porcelain, ceramic & mosaic tiles",
  },
  {
    name: "Flooring",
    image: "https://images.prismic.io/gs-web/ZrBk3rokW0aN5CB3_flooring-collection.jpg",
    href: "/collections/all-flooring",
    description: "Hardwood, vinyl & laminate flooring",
  },
];

export default function CollectionCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Surfaces Crafted for Living
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Curated to elevate every environment with enduring style.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, i) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                href={collection.href}
                className="group relative block rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-charcoal/20 flex items-center justify-center">
                  <span className="text-white/30 text-6xl font-bold">{collection.name}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1">{collection.name}</h3>
                  <p className="text-white/70 text-sm mb-3">{collection.description}</p>
                  <span className="text-white text-sm font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Shop Now
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
