"use client";

import { motion } from "framer-motion";

const banners = [
  "Turnkey Renovation Solutions",
  "Premium Materials, Professional Installation",
  "From Design to Delivery",
  "See the Results",
];

export default function ImageBanners() {
  return (
    <section className="bg-navy">
      {banners.map((heading, i) => (
        <motion.div
          key={heading}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="w-full"
        >
          <div
            className="w-full bg-navy/80 border-b border-white/10 flex items-center justify-center"
            style={{ aspectRatio: "8 / 1" }}
          >
            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white text-center px-4">
              {heading}
            </h3>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
