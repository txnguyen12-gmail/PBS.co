export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image?: string;
}

export const surfacesTestimonials: Testimonial[] = [
  {
    name: "Michelle T.",
    role: "Interior Designer, Miami, FL",
    quote: "Perfect Building Supply Co. revolutionized my project's finishes procurement, simplifying the process and elevating the results.",
    rating: 5,
    image: "/images/testimonials/candid-portrait.jpeg",
  },
  {
    name: "Ryan D.",
    role: "General Contractor, Houston, TX",
    quote: "They helped me reduce 20% material cost on a large remodel. The pricing transparency is unmatched.",
    rating: 5,
    image: "/images/testimonials/testimonial-5.png",
  },
  {
    name: "Alicia W.",
    role: "Interior Designer, Seattle, WA",
    quote: "Super easy to work with, and their team knows the materials inside out. Saved me time and money.",
    rating: 5,
  },
  {
    name: "Jason M.",
    role: "Stone Fabricator, Denver, CO",
    quote: "Perfect Building Supply Co. saved me a lot of money by sourcing and shipping directly to my job site.",
    rating: 5,
  },
  {
    name: "Mike G.",
    role: "Stone Fabricator, Houston, TX",
    quote: "I shopped around, and Perfect Building Supply Co. beat everyone on price — and I didn't have to wait hours.",
    rating: 5,
  },
  {
    name: "Karen L.",
    role: "Builder, Tampa, FL",
    quote: "I started using Perfect Building Supply Co. mainly for pricing, but the service is what really keeps me coming back.",
    rating: 5,
  },
];
