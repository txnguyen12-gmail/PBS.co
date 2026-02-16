"use client";

import { motion } from "framer-motion";

export default function WhatIsGoClub() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-accent-orange uppercase tracking-wider font-medium mb-3 block">
              What is TanClub?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Loyalty That Pays Off
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              TanClub members receive <strong className="text-navy">exclusive discounts</strong>,{" "}
              <strong className="text-navy">TanCash rewards</strong> on every purchase,{" "}
              <strong className="text-navy">priority support</strong>, and access to{" "}
              <strong className="text-navy">qualified leads</strong> — all designed to help
              stone fabricators and trade professionals grow their business.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Whether you are a fabricator sourcing slabs daily or a designer specifying
              materials for a client project, TanClub gives you the tools, pricing, and
              support to stay ahead.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              As you grow with TanWinWin, your benefits grow too. Advance through{" "}
              <strong className="text-navy">tier-based rewards</strong> to unlock even greater
              savings, faster service, and dedicated account management.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate to-surface-light flex items-center justify-center">
              <img
                src="https://images.prismic.io/gs-web/aVo9TnNYClf9owj5_Fabricator_GoCash_Square.png"
                alt="Fabricator using TanClub on mobile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
