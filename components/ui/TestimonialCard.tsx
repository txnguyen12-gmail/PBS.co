"use client";

import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent-orange text-accent-orange" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 flex-1 italic">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-orange/20 to-accent-gold/20 flex items-center justify-center">
            <span className="text-charcoal font-bold text-sm">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-sm text-charcoal">{testimonial.name}</p>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
