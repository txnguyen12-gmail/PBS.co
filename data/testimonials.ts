export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image?: string;
}

export const surfacesTestimonials: Testimonial[] = [
  {
    name: "Carlos R.",
    role: "General Contractor, Destin, FL",
    quote: "We were paying way too much at our old supplier. PBS got us the same cabinets for about 30% less, and they delivered straight to the job site in Fort Walton.",
    rating: 5,
  },
  {
    name: "Danny H.",
    role: "Home Builder, Panama City, FL",
    quote: "I needed WPC wall panels for a 12-unit project on a tight deadline. PBS had everything in stock and the pricing was way better than what I was quoted elsewhere.",
    rating: 5,
  },
  {
    name: "Lisa M.",
    role: "Interior Designer, Pensacola, FL",
    quote: "Honestly, I was skeptical at first. But their team walked me through the ceiling options for a commercial remodel and helped me stay under budget. Really solid people.",
    rating: 5,
  },
  {
    name: "Travis W.",
    role: "Remodeling Contractor, Miramar Beach, FL",
    quote: "I've done three kitchen remodels with PBS cabinets now. Good quality, fair price, and I can actually get someone on the phone when I need to.",
    rating: 5,
  },
  {
    name: "Marcus J.",
    role: "Property Developer, Tallahassee, FL",
    quote: "We switched to PBS for bulk flooring orders last year. The volume pricing alone saved us enough to cover an extra unit's worth of material.",
    rating: 5,
  },
  {
    name: "Angela S.",
    role: "Builder, Niceville, FL",
    quote: "What I like is they don't try to upsell you. They just find what you need at the best price. That's hard to come by these days.",
    rating: 5,
  },
];
