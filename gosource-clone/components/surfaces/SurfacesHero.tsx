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
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-3xl leading-tight"
        >
          America&apos;s #1 Fastest-Growing Surfaces Marketplace
        </motion.h1>

        <div className="flex flex-wrap gap-6 md:gap-12 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3"
            >
              <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-white/70 text-sm font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="/sign-up" variant="accent" size="lg">
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
