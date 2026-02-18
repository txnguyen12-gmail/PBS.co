"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function GoClubHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src="https://gs-web.cdn.prismic.io/gs-web/aRr0rbpReVYa4iB-_Herogoclubdarkversion-1-.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      >
        <source src="https://gs-web.cdn.prismic.io/gs-web/aRrswbpReVYa4h9j_Heromobiledarkversion.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-charcoal/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl"
        >
          PBS Club by PBS Supply Co.: The First Loyalty Club for Trade Professionals
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          {["Bigger Discounts", "Free Qualified Leads", "24/7 Priority Support"].map((benefit, i) => (
            <div
              key={benefit}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
            >
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {benefit}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="/sign-up" variant="white" size="lg">
            Join Our Club
          </Button>
          <Button href="tel:+17139271500" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
            Call An Account Manager
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
