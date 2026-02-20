import { Product } from "./types";

export const sanitaryware: Product[] = [
  // Smart Toilets
  {
    id: "PBS-SAN-001",
    name: "Smart Toilet Pro",
    slug: "smart-toilet-pro",
    category: "sanitaryware",
    subcategory: "One-Piece Toilet",
    description:
      "Fully automatic smart toilet with electronic lid, built-in bidet, heated seat, warm air dryer, and deodorizer. The ultimate in comfort and hygiene.",
    highlights: [
      "Auto open/close lid with built-in bidet",
      "Heated seat, warm air dryer, deodorizer",
    ],
    specs: [
      { label: "Type", value: "One-Piece Smart Toilet" },
      { label: "Flush", value: "Dual Flush 3/6L" },
      { label: "Features", value: "Electronic Lid, Bidet, Heated Seat" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
      { label: "Rough-In", value: '12" (300mm)' },
    ],
    image: "/images/products/sanitaryware/smart-toilet-pro.jpg",
    tags: ["smart", "one-piece", "bidet", "electronic"],
    badge: "New",
  },
  {
    id: "PBS-SAN-002",
    name: "Smart Toilet Elite",
    slug: "smart-toilet-elite",
    category: "sanitaryware",
    subcategory: "One-Piece Toilet",
    description:
      "Premium smart toilet with massage wash function, adjustable nozzle, temperature control, and power-saving mode.",
    highlights: [
      "Massage wash function with adjustable nozzle",
      "Power-saving mode for energy efficiency",
    ],
    specs: [
      { label: "Type", value: "One-Piece Smart Toilet" },
      { label: "Flush", value: "Dual Flush 3/6L" },
      { label: "Features", value: "Massage Wash, Adjustable Nozzle" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
      { label: "Rough-In", value: '12" (300mm)' },
    ],
    image: "/images/products/sanitaryware/smart-toilet-elite.jpg",
    tags: ["smart", "one-piece", "massage", "premium"],
  },
  // One-Piece Toilets with Electronic Lid
  {
    id: "PBS-SAN-003",
    name: "One-Piece Bidet Toilet",
    slug: "one-piece-bidet-toilet",
    category: "sanitaryware",
    subcategory: "One-Piece Toilet",
    description:
      "One-piece toilet with electronic bidet lid. Adjustable hot water wash, 4-season drying fan, and soft-close seat.",
    highlights: [
      "Electronic bidet lid with hot water wash",
      "4-season drying fan, soft-close seat",
    ],
    specs: [
      { label: "Type", value: "One-Piece with Electronic Lid" },
      { label: "Flush", value: "Dual Flush 3/6L" },
      { label: "Features", value: "Bidet Wash, Seat Warming, Drying Fan" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
      { label: "Rough-In", value: '12" (300mm)' },
    ],
    image: "/images/products/sanitaryware/one-piece-bidet.jpg",
    tags: ["one-piece", "bidet", "electronic"],
    badge: "Best Seller",
  },
  // Standard One-Piece Toilets
  {
    id: "PBS-SAN-004",
    name: "One-Piece Classic",
    slug: "one-piece-classic",
    category: "sanitaryware",
    subcategory: "One-Piece Toilet",
    description:
      "Sleek one-piece toilet with dual-flush push-button and siphon jet flush system. Soft-close lid and anti-bacterial glaze.",
    highlights: [
      "Siphon jet flush — powerful and quiet",
      "Soft-close lid, anti-bacterial glaze",
    ],
    specs: [
      { label: "Type", value: "One-Piece" },
      { label: "Dimensions", value: "710 x 370 x 770mm" },
      { label: "Flush", value: "Dual Flush 3/6L" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
      { label: "Rough-In", value: '12" (300mm)' },
    ],
    image: "/images/products/sanitaryware/one-piece-classic.jpg",
    tags: ["one-piece", "classic", "standard"],
  },
  {
    id: "PBS-SAN-005",
    name: "One-Piece Compact",
    slug: "one-piece-compact",
    category: "sanitaryware",
    subcategory: "One-Piece Toilet",
    description:
      "Compact one-piece toilet for small bathrooms and powder rooms. Space-saving design without compromising performance.",
    highlights: [
      "Compact size — ideal for small spaces",
      "Water-saving dual flush",
    ],
    specs: [
      { label: "Type", value: "One-Piece Compact" },
      { label: "Dimensions", value: "355 x 535 x 550mm" },
      { label: "Flush", value: "Dual Flush 3/6L" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
      { label: "Rough-In", value: '10" (265mm)' },
    ],
    image: "/images/products/sanitaryware/one-piece-compact.jpg",
    tags: ["one-piece", "compact", "small-space"],
  },
  {
    id: "PBS-SAN-006",
    name: "One-Piece Modern",
    slug: "one-piece-modern",
    category: "sanitaryware",
    subcategory: "One-Piece Toilet",
    description:
      "Modern one-piece toilet with clean lines and low-profile tank. Water-saving design with powerful siphon jet.",
    highlights: [
      "Low-profile modern design",
      "Water-saving siphon jet flush",
    ],
    specs: [
      { label: "Type", value: "One-Piece" },
      { label: "Dimensions", value: "520 x 710 x 700mm" },
      { label: "Flush", value: "Dual Flush 3/6L" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
      { label: "Rough-In", value: '12" (305mm)' },
    ],
    image: "/images/products/sanitaryware/one-piece-modern.jpg",
    tags: ["one-piece", "modern", "low-profile"],
  },
  // Water-Saving
  {
    id: "PBS-SAN-007",
    name: "Eco Saver One-Piece",
    slug: "eco-saver-one-piece",
    category: "sanitaryware",
    subcategory: "One-Piece Toilet",
    description:
      "Ultra water-saving one-piece toilet with 3-liter single flush mode. Saves up to 50% water compared to standard toilets.",
    highlights: [
      "3-liter single flush — ultra water-saving",
      "Saves up to 50% water per flush",
    ],
    specs: [
      { label: "Type", value: "One-Piece (Water-Saving)" },
      { label: "Flush", value: "Single Flush 3L" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
      { label: "Rough-In", value: '12" (300mm)' },
    ],
    image: "/images/products/sanitaryware/eco-saver.jpg",
    tags: ["one-piece", "eco", "water-saving"],
  },
  // Two-Piece Toilets
  {
    id: "PBS-SAN-008",
    name: "Two-Piece Standard",
    slug: "two-piece-standard",
    category: "sanitaryware",
    subcategory: "Two-Piece Toilet",
    description:
      "Classic two-piece toilet with push-button dual flush. Reliable, easy-to-maintain design for residential projects.",
    highlights: [
      "Push-button dual flush (3/6L)",
      "Easy-to-maintain two-piece design",
    ],
    specs: [
      { label: "Type", value: "Two-Piece" },
      { label: "Flush", value: "Dual Flush 3/6L (Push-Button)" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
      { label: "Seat", value: "Soft-Close" },
      { label: "Rough-In", value: '12" (300mm)' },
    ],
    image: "/images/products/sanitaryware/two-piece-standard.jpg",
    tags: ["two-piece", "standard", "push-button"],
    badge: "Best Seller",
  },
  {
    id: "PBS-SAN-009",
    name: "Two-Piece Value",
    slug: "two-piece-value",
    category: "sanitaryware",
    subcategory: "Two-Piece Toilet",
    description:
      "Budget-friendly two-piece toilet with lever flush. Solid performance at an accessible price point for multifamily projects.",
    highlights: [
      "Lever flush — simple and reliable",
      "Value pricing for bulk projects",
    ],
    specs: [
      { label: "Type", value: "Two-Piece" },
      { label: "Flush", value: "Lever Flush" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
      { label: "Seat", value: "Soft-Close" },
      { label: "Rough-In", value: '12" (300mm)' },
    ],
    image: "/images/products/sanitaryware/two-piece-value.jpg",
    tags: ["two-piece", "value", "lever", "bulk"],
  },
  {
    id: "PBS-SAN-010",
    name: "Two-Piece P-Trap",
    slug: "two-piece-p-trap",
    category: "sanitaryware",
    subcategory: "Two-Piece Toilet",
    description:
      "Two-piece toilet with horizontal wall outlet (P-trap). Ideal for installations where floor drainage is not available.",
    highlights: [
      "P-trap (horizontal wall outlet)",
      "For installations without floor drainage",
    ],
    specs: [
      { label: "Type", value: "Two-Piece P-Trap" },
      { label: "Flush", value: "Dual Flush 3/6L" },
      { label: "Drain", value: "P-Trap (Wall Outlet)" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
    ],
    image: "/images/products/sanitaryware/two-piece-p-trap.jpg",
    tags: ["two-piece", "p-trap", "wall-outlet"],
  },
  // Wall-Hung
  {
    id: "PBS-SAN-011",
    name: "Wall-Hung Toilet",
    slug: "wall-hung-toilet",
    category: "sanitaryware",
    subcategory: "Wall-Hung Toilet",
    description:
      "Wall-mounted toilet with concealed dual-flush tank. Clean, modern look with easy floor cleaning underneath.",
    highlights: [
      "Concealed tank — clean floating design",
      "Easy floor cleaning underneath",
    ],
    specs: [
      { label: "Type", value: "Wall-Hung" },
      { label: "Flush", value: "Concealed Dual Flush 3/6L" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
      { label: "Seat", value: "Slow-Close" },
      { label: "Mounting", value: "Wall-Mounted (frame required)" },
    ],
    image: "/images/products/sanitaryware/wall-hung-toilet.jpg",
    tags: ["wall-hung", "concealed", "modern", "floating"],
    badge: "New",
  },
  // Basins
  {
    id: "PBS-SAN-012",
    name: "Countertop Basin — Round",
    slug: "countertop-basin-round",
    category: "sanitaryware",
    subcategory: "Basin",
    description:
      "Round vessel-style countertop basin. Clean, contemporary design for vanity tops and bathroom renovations.",
    highlights: [
      "Vessel-style — sits on top of vanity",
      "Anti-bacterial non-stick glaze",
    ],
    specs: [
      { label: "Type", value: "Countertop Vessel Basin" },
      { label: "Shape", value: "Round" },
      { label: "Diameter", value: "~420mm" },
      { label: "Material", value: "Vitreous China" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
    ],
    image: "/images/products/sanitaryware/basin-round.jpg",
    tags: ["basin", "round", "countertop", "vessel"],
  },
  {
    id: "PBS-SAN-013",
    name: "Countertop Basin — Rectangular",
    slug: "countertop-basin-rectangular",
    category: "sanitaryware",
    subcategory: "Basin",
    description:
      "Rectangular vessel-style countertop basin. Modern geometric design for contemporary bathrooms.",
    highlights: [
      "Modern rectangular vessel design",
      "Smooth, easy-clean surface",
    ],
    specs: [
      { label: "Type", value: "Countertop Vessel Basin" },
      { label: "Shape", value: "Rectangular" },
      { label: "Dimensions", value: "615 x 455mm" },
      { label: "Material", value: "Vitreous China" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
    ],
    image: "/images/products/sanitaryware/basin-rectangular.jpg",
    tags: ["basin", "rectangular", "countertop", "vessel"],
  },
  {
    id: "PBS-SAN-014",
    name: "Pedestal Basin Classic",
    slug: "pedestal-basin-classic",
    category: "sanitaryware",
    subcategory: "Basin",
    description:
      "Traditional freestanding pedestal basin. Full pedestal conceals plumbing for a clean, classic bathroom look.",
    highlights: [
      "Full pedestal conceals plumbing",
      "Classic freestanding design",
    ],
    specs: [
      { label: "Type", value: "Freestanding Pedestal Basin" },
      { label: "Width", value: "~580mm" },
      { label: "Material", value: "Vitreous China" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
    ],
    image: "/images/products/sanitaryware/pedestal-basin.jpg",
    tags: ["basin", "pedestal", "freestanding", "classic"],
  },
  {
    id: "PBS-SAN-015",
    name: "Wall-Hung Basin",
    slug: "wall-hung-basin",
    category: "sanitaryware",
    subcategory: "Basin",
    description:
      "Wall-mounted basin with half-pedestal shroud. Space-saving design that keeps the floor clear for easy cleaning.",
    highlights: [
      "Wall-mounted — saves floor space",
      "Half-pedestal conceals plumbing",
    ],
    specs: [
      { label: "Type", value: "Wall-Hung with Half-Pedestal" },
      { label: "Width", value: "~500mm" },
      { label: "Material", value: "Vitreous China" },
      { label: "Glaze", value: "Anti-Bacterial Non-Stick" },
    ],
    image: "/images/products/sanitaryware/wall-hung-basin.jpg",
    tags: ["basin", "wall-hung", "space-saving"],
  },
  // Vanity Sets
  {
    id: "PBS-SAN-016",
    name: "Vanity Set — 24\"",
    slug: "vanity-set-24",
    category: "sanitaryware",
    subcategory: "Basin",
    description:
      "Complete 24\" vanity set with sink, cabinet, and mirror. Compact size for guest bathrooms and powder rooms.",
    highlights: [
      "Complete set: sink + cabinet + mirror",
      "Compact 24\" width for small spaces",
    ],
    specs: [
      { label: "Width", value: '24" (620mm)' },
      { label: "Includes", value: "Basin, Cabinet, Mirror" },
      { label: "Cabinet", value: "White with Soft-Close Doors" },
      { label: "Material", value: "Vitreous China Basin, MDF Cabinet" },
    ],
    image: "/images/products/sanitaryware/vanity-24.jpg",
    tags: ["vanity", "24-inch", "compact", "set"],
  },
  {
    id: "PBS-SAN-017",
    name: "Vanity Set — 30\"",
    slug: "vanity-set-30",
    category: "sanitaryware",
    subcategory: "Basin",
    description:
      "30\" vanity set with sink, floating cabinet, and mirrored medicine cabinet. Mid-size option for standard bathrooms.",
    highlights: [
      "Floating cabinet — modern design",
      "Mirrored medicine cabinet included",
    ],
    specs: [
      { label: "Width", value: '30" (765mm)' },
      { label: "Includes", value: "Basin, Floating Cabinet, Mirror Cabinet" },
      { label: "Cabinet", value: "White/Black with Drawers" },
      { label: "Material", value: "Vitreous China Basin, MDF Cabinet" },
    ],
    image: "/images/products/sanitaryware/vanity-30.jpg",
    tags: ["vanity", "30-inch", "floating", "set"],
  },
  {
    id: "PBS-SAN-018",
    name: "Vanity Set — 36\"",
    slug: "vanity-set-36",
    category: "sanitaryware",
    subcategory: "Basin",
    description:
      "Full-size 36\" vanity set with integrated basin, dual-door cabinet, and wide mirror. Ample storage for master bathrooms.",
    highlights: [
      "Ample storage with dual-door cabinet",
      "Wide mirror for master bathrooms",
    ],
    specs: [
      { label: "Width", value: '36" (920mm)' },
      { label: "Includes", value: "Basin, Dual-Door Cabinet, Wide Mirror" },
      { label: "Cabinet", value: "White with Soft-Close" },
      { label: "Material", value: "Vitreous China Basin, MDF Cabinet" },
    ],
    image: "/images/products/sanitaryware/vanity-36.jpg",
    tags: ["vanity", "36-inch", "full-size", "set"],
  },
];
