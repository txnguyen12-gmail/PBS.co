"use client";

import { motion } from "framer-motion";

export default function TestimonialsBanner() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8">
            &ldquo;TanWinTan transformed our renovation process — faster turnarounds, better materials, and significant cost savings across our entire portfolio.&rdquo;
          </blockquote>
          <p className="text-gray-400 text-lg font-semibold">
            — Property Management Executive
          </p>
        </motion.div>
      </div>
    </section>
  );
}
