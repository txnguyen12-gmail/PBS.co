import { Product } from "./types";

export const showerBath: Product[] = [
  {
    id: "PBS-SHB-001",
    name: "Thermostatic Shower Set — Chrome",
    slug: "thermostatic-shower-set-chrome",
    category: "shower-bath",
    subcategory: "Shower Set",
    description:
      "Complete thermostatic shower set with rain shower head, handheld spray, and adjustable slide bar. Temperature-controlled for safety and comfort.",
    highlights: [
      "Thermostatic valve — anti-scald protection",
      "Rain shower head + handheld spray",
    ],
    specs: [
      { label: "Type", value: "Thermostatic Shower Set" },
      { label: "Finish", value: "Chrome" },
      { label: "Rain Head", value: '10" Square' },
      { label: "Handheld", value: "3-Function Spray" },
      { label: "Includes", value: "Valve, Rain Head, Handheld, Slide Bar" },
    ],
    image: "/images/products/shower-bath/thermostatic-shower-chrome.jpg",
    tags: ["shower-set", "thermostatic", "chrome", "rain"],
    badge: "Best Seller",
  },
  {
    id: "PBS-SHB-002",
    name: "Thermostatic Shower Set — Matte Black",
    slug: "thermostatic-shower-set-matte-black",
    category: "shower-bath",
    subcategory: "Shower Set",
    description:
      "Matte black thermostatic shower system with 12\" rain head and handheld spray. Modern statement piece for luxury bathrooms.",
    highlights: [
      "Matte black finish — modern luxury",
      "12\" oversized rain shower head",
    ],
    specs: [
      { label: "Type", value: "Thermostatic Shower Set" },
      { label: "Finish", value: "Matte Black" },
      { label: "Rain Head", value: '12" Square' },
      { label: "Handheld", value: "3-Function Spray" },
      { label: "Includes", value: "Valve, Rain Head, Handheld, Slide Bar" },
    ],
    image: "/images/products/shower-bath/thermostatic-shower-black.jpg",
    tags: ["shower-set", "thermostatic", "matte-black", "rain"],
    badge: "New",
  },
  {
    id: "PBS-SHB-003",
    name: "Ceiling Rain Shower Head",
    slug: "ceiling-rain-shower-head",
    category: "shower-bath",
    subcategory: "Rain Shower",
    description:
      "Flush-mount ceiling rain shower head in polished chrome. Creates a true rainfall experience with even water distribution.",
    highlights: [
      "Flush-mount ceiling installation",
      "Even water distribution — true rainfall",
    ],
    specs: [
      { label: "Type", value: "Ceiling-Mount Rain Head" },
      { label: "Finish", value: "Polished Chrome" },
      { label: "Size", value: '12" Square' },
      { label: "Flow Rate", value: "2.5 GPM" },
      { label: "Installation", value: "Ceiling Flush-Mount" },
    ],
    image: "/images/products/shower-bath/ceiling-rain-head.jpg",
    tags: ["rain-shower", "ceiling", "chrome", "flush-mount"],
  },
  {
    id: "PBS-SHB-004",
    name: "Freestanding Soaking Bathtub",
    slug: "freestanding-soaking-bathtub",
    category: "shower-bath",
    subcategory: "Bathtub",
    description:
      "Contemporary freestanding acrylic soaking bathtub. Oval design with comfortable sloped back and floor-mount faucet compatibility.",
    highlights: [
      "Freestanding oval design — statement piece",
      "Acrylic construction — warm to the touch",
    ],
    specs: [
      { label: "Type", value: "Freestanding Soaking Tub" },
      { label: "Material", value: "Acrylic with Fiberglass Reinforcement" },
      { label: "Dimensions", value: '67" x 32" x 23"' },
      { label: "Capacity", value: "~60 Gallons" },
      { label: "Drain", value: "Center Drain" },
    ],
    image: "/images/products/shower-bath/freestanding-bathtub.jpg",
    tags: ["bathtub", "freestanding", "acrylic", "soaking"],
  },
  {
    id: "PBS-SHB-005",
    name: "Frameless Shower Enclosure",
    slug: "frameless-shower-enclosure",
    category: "shower-bath",
    subcategory: "Shower Enclosure",
    description:
      "Frameless glass shower enclosure with pivot door. 10mm tempered safety glass for a sleek, open bathroom design.",
    highlights: [
      "10mm tempered safety glass",
      "Frameless design — clean, modern look",
    ],
    specs: [
      { label: "Type", value: "Frameless Pivot Door Enclosure" },
      { label: "Glass", value: "10mm Tempered Safety Glass" },
      { label: "Finish", value: "Chrome Hardware" },
      { label: "Width Options", value: '36", 48", 60"' },
      { label: "Height", value: '72"' },
    ],
    image: "/images/products/shower-bath/frameless-enclosure.jpg",
    tags: ["enclosure", "frameless", "glass", "pivot"],
  },
  {
    id: "PBS-SHB-006",
    name: "Sliding Shower Door",
    slug: "sliding-shower-door",
    category: "shower-bath",
    subcategory: "Shower Enclosure",
    description:
      "Bypass sliding shower door with chrome frame and clear tempered glass. Space-saving design for alcove bathtub/shower combos.",
    highlights: [
      "Space-saving bypass sliding design",
      "Clear tempered glass with chrome frame",
    ],
    specs: [
      { label: "Type", value: "Bypass Sliding Door" },
      { label: "Glass", value: "6mm Tempered Clear Glass" },
      { label: "Finish", value: "Chrome Frame" },
      { label: "Width Options", value: '56-60"' },
      { label: "Height", value: '70"' },
    ],
    image: "/images/products/shower-bath/sliding-shower-door.jpg",
    tags: ["enclosure", "sliding", "bypass", "alcove"],
  },
];
