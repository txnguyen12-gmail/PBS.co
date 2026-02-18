export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image?: string;
}

export const surfacesTestimonials: Testimonial[] = [
  {
    name: "Dorothy Macik",
    role: "Designer",
    quote: "PBS Supply Co. revolutionized my project's finishes procurement, simplifying the process and elevating the results.",
    rating: 5,
    image: "/images/testimonials/dorothy.jpeg",
  },
  {
    name: "Rafael Moyal",
    role: "Under Construction Inc.",
    quote: "PBS Supply Co. helped me reduce 20% material cost on this project.",
    rating: 5,
    image: "/images/testimonials/moyal.avif",
  },
  {
    name: "Alicia W.",
    role: "Interior Designer, Seattle, WA",
    quote: "Super easy to work with, and their team knows the materials inside out. Saved me time and money.",
    rating: 5,
    image: "/images/testimonials/candid-portrait.jpeg",
  },
  {
    name: "Amir Nadel",
    role: "Rhodium Construction Inc.",
    quote: "PBS Supply Co. saved me a lot of money by sourcing and shipping to my Denver job site.",
    rating: 5,
    image: "/images/testimonials/nadel.webp",
  },
  {
    name: "Mike G.",
    role: "Stone Fabricator, Houston, TX",
    quote: "I shopped around, and PBS Supply Co. beat everyone on price — and I didn't have to wait hours.",
    rating: 5,
    image: "/images/testimonials/testimonial-5.png",
  },
  {
    name: "David Suker",
    role: "Builder",
    quote: "I started using PBS Supply Co. mainly for pricing, but the service is what really keeps me coming back.",
    rating: 5,
  },
];

export const tanclubTestimonials: Testimonial[] = [
  {
    name: "Tom K.",
    role: "Developer, Austin, TX",
    quote: "Fast quotes, fair prices, and on-time delivery — exactly what I need to keep projects moving.",
    rating: 5,
    image: "/images/testimonials/testimonial-goclub-1.jpeg",
  },
  {
    name: "Luis M.",
    role: "Remodeler, Miami, FL",
    quote: "The quoting process was fast, and their sourcing expert helped me find exactly what I needed in minutes.",
    rating: 5,
    image: "/images/testimonials/testimonial-goclub-2.png",
  },
  {
    name: "Derek T.",
    role: "Builder, Phoenix, AZ",
    quote: "I've used a lot of vendors, but PBS Supply Co. consistently has the best pricing on natural stone and prefab slabs.",
    rating: 5,
    image: "/images/testimonials/testimonial-goclub-3.jpeg",
  },
  {
    name: "Sandra K.",
    role: "Kitchen & Bath Designer, Denver, CO",
    quote: "PBS Club rewards actually add up. I reinvest my PBScash into the next project — it's a no-brainer for repeat buyers.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    role: "General Contractor, Dallas, TX",
    quote: "Having a dedicated account manager through PBS Club has saved me countless hours. They handle sourcing so I can focus on building.",
    rating: 5,
  },
];
