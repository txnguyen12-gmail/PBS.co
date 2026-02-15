"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Button from "@/components/ui/Button";

const tiers = [
  { name: "TanClub Member", volume: "Under $10K" },
  { name: "TanClub Gold", volume: "Above $10K" },
  { name: "TanClub Platinum", volume: "Above $100K" },
];

const features = [
  {
    name: "TanCash Cashback",
    values: ["2%", "3%", "5%"],
  },
  {
    name: "Lock Price Protection",
    values: ["7 Days", "10 Days", "14 Days"],
  },
  {
    name: "Special Discounts",
    values: ["Best wholesale guaranteed", "Gold discounts on wholesale", "Exclusive Platinum discounts"],
  },
  {
    name: "New Business Leads",
    values: [true, true, true],
  },
  {
    name: "Same-day Quotes",
    values: ["Standard", "Priority handling", "Top Priority handling"],
  },
  {
    name: "Priority Support",
    values: ["Standard", "24/7 Dedicated account exec", "24/7 Dedicated account exec"],
  },
  {
    name: "Free Samples",
    values: [false, true, true],
  },
  {
    name: "Split Payments",
    values: [false, "50/50 upfront/delivery", "50/50 upfront/delivery"],
  },
  {
    name: "Flexible Payment Terms",
    values: [false, false, "Net 30"],
  },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-green-500 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-gray-300 mx-auto" />
    );
  }
  return <span className="text-sm">{value}</span>;
}

export default function MembershipTiers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Membership Tiers
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Your benefits grow as your business grows
        </p>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:block overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm text-gray-500 font-medium">Feature</th>
                {tiers.map((tier) => (
                  <th key={tier.name} className="p-4 text-center">
                    <div className="font-bold text-navy">{tier.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{tier.volume}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={feature.name} className={i % 2 === 0 ? "bg-surface-light" : ""}>
                  <td className="p-4 text-sm font-medium text-navy">{feature.name}</td>
                  {feature.values.map((value, j) => (
                    <td key={j} className="p-4 text-center text-gray-700">
                      <CellValue value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {tiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: tierIndex * 0.1 }}
              className="bg-surface-light rounded-2xl p-6"
            >
              <h3 className="font-bold text-navy text-lg mb-1">{tier.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{tier.volume}</p>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature.name} className="flex items-start justify-between gap-2 text-sm">
                    <span className="text-gray-600">{feature.name}</span>
                    <span className="text-right text-navy font-medium flex-shrink-0">
                      <CellValue value={feature.values[tierIndex]} />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/sign-up" variant="primary" size="lg">
            Join Our Club
          </Button>
        </div>
      </div>
    </section>
  );
}
