"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const stats = [
  { value: "100%", label: "Unbeatable Prices" },
  { value: "24/7", label: "VIP Support" },
  { value: "300,000+", label: "Products In Stock" },
];

export default function SurfacesHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-navy">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="https://gs-web.cdn.prismic.io/gs-web/aRGmcrpReVYa4R0Z_surfaces.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-charcoal/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white mb-6"
        >
          🇺🇸 America&apos;s #1 Fastest-Growing Surfaces Marketplace
        </motion.div>

        <div className="flex flex-wrap gap-8 md:gap-16 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="text-white"
            >
              <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="/sign-up" variant="white" size="lg">
            Create An Account
          </Button>
          <Button href="tel:+14242507795" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
            Talk to My TanWinWin Expert
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
