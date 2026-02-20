"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/data/faq";

export default function FAQAccordion({ items, title, category, description }: { items: FAQItem[]; title?: string; category?: string; description?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {category && (
          <p className="text-center text-accent-orange font-semibold text-sm uppercase tracking-wider mb-4">
            {category}
          </p>
        )}
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-charcoal text-center mb-4">
          {title || "Frequently Asked Questions"}
        </h2>
        {description && (
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            {description}
          </p>
        )}
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                id={`faq-btn-${index}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-charcoal pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-charcoal flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-btn-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
