"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Truck, DollarSign, ShieldCheck } from "lucide-react";

const valuePills = [
  { icon: DollarSign, label: "Lower Prices Guaranteed" },
  { icon: Truck, label: "Direct Trucking to Your Jobsite" },
  { icon: ShieldCheck, label: "Trusted by Builders Nationwide" },
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
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <img src="/images/logo/pbs-logo.jpeg" alt="Perfect Building Supply Co." className="h-16 md:h-20 w-16 md:w-20 object-contain" />
          <div className="hidden sm:block">
            <p className="text-white/60 text-sm font-medium tracking-wider uppercase">The Perfect</p>
            <p className="text-white text-lg md:text-xl font-bold leading-tight">Building Supply Co.</p>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight"
        >
          America&apos;s #1 Building Supply Source
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl"
        >
          For large and small builders. Lower prices than your current supplier — guaranteed.
        </motion.p>

        <div className="flex flex-wrap gap-4 md:gap-6 mb-10">
          {valuePills.map((pill, i) => (
            <motion.div
              key={pill.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3"
            >
              <pill.icon className="w-5 h-5 text-accent-orange" />
              <span className="text-white text-sm font-medium">{pill.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="/sign-up" variant="accent" size="lg">
            Get Started
          </Button>
          <Button href="tel:+17139271500" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
            Call (713) 927-1500
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
