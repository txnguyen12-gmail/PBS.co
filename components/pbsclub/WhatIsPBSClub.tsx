"use client";

import { motion } from "framer-motion";

export default function WhatIsPBSClub() {
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
              What is PBS Club?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Loyalty That Pays Off
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              PBS Club members receive <strong className="text-navy">exclusive discounts</strong>,{" "}
              <strong className="text-navy">PBScash rewards</strong> on every purchase,{" "}
              <strong className="text-navy">priority support</strong>, and access to{" "}
              <strong className="text-navy">qualified leads</strong> — all designed to help
              stone fabricators and trade professionals grow their business.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Whether you are a fabricator sourcing slabs daily or a designer specifying
              materials for a client project, PBS Club gives you the tools, pricing, and
              support to stay ahead.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              As you grow with Perfect Building Supply Co., your benefits grow too. Advance through{" "}
              <strong className="text-navy">tier-based rewards</strong> to unlock even greater
              savings, faster service, and dedicated account management.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            {/* PBS-branded loyalty card */}
            <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-charcoal shadow-2xl overflow-hidden flex flex-col justify-between p-10">
              {/* Background circles */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-orange translate-x-20 -translate-y-20" />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent-orange -translate-x-16 translate-y-16" />
              </div>

              {/* Header */}
              <div className="relative z-10 flex items-center gap-3">
                <img src="/images/logo/pbs-logo.jpeg" alt="PBS" className="h-12 w-12 object-contain" />
                <div>
                  <p className="text-white font-bold text-sm leading-tight">PBS Club™</p>
                  <p className="text-white/50 text-xs">Gold Member</p>
                </div>
                <span className="ml-auto text-xs font-bold text-accent-orange bg-accent-orange/15 px-3 py-1 rounded-full">GOLD</span>
              </div>

              {/* Center: cashback balance */}
              <div className="relative z-10">
                <p className="text-white/50 text-sm mb-1">Total PBScash Earned</p>
                <p className="text-6xl font-bold text-accent-orange leading-none">$456</p>
                <p className="text-white/40 text-xs mt-2">Redeemable on your next order</p>
              </div>

              {/* Bottom: tier progress */}
              <div className="relative z-10">
                <div className="flex justify-between text-xs text-white/50 mb-2">
                  <span>Gold Progress</span>
                  <span>$9,200 / $10,000</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-orange rounded-full" style={{ width: "92%" }} />
                </div>
                <p className="text-white/40 text-xs mt-2">$800 away from Platinum tier</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
