export interface PricingPackage {
  name: string;
  price: string;
  turnaround: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    name: "Pro",
    price: "$3,999",
    turnaround: "7-10 days",
    description: "Smart upgrades. Engineered value.",
    ctaText: "Fast turnaround",
    features: [
      "Standard material selection",
      "Basic appliance package",
      "Professional installation",
      "Project coordination",
      "Quality assurance inspection",
    ],
  },
  {
    name: "Premium",
    price: "$6,599",
    turnaround: "10-14 days",
    description: "Premium materials. Long-term value.",
    ctaText: "Elevated design",
    features: [
      "Premium material selection",
      "Upgraded appliance package",
      "Professional installation",
      "Dedicated project manager",
      "Quality assurance inspection",
      "Design consultation",
    ],
  },
  {
    name: "Elite",
    price: "$13,999",
    turnaround: "14-21 days",
    description: "Full-scale Renovation. Top-tier materials.",
    popular: true,
    ctaText: "Full-scale Renovation",
    features: [
      "Top-tier material selection",
      "Premium appliance package",
      "Full-scale renovation",
      "Dedicated project team",
      "Multiple quality inspections",
      "Design consultation",
      "Custom finishes",
      "Priority scheduling",
    ],
  },
  {
    name: "Custom",
    price: "Custom",
    turnaround: "Varies",
    description: "Tailored renovation solutions — built around your vision.",
    ctaText: "Make your package",
    features: [
      "Fully customized scope",
      "Bespoke material selection",
      "Flexible timeline",
      "Dedicated project team",
      "End-to-end management",
    ],
  },
];
