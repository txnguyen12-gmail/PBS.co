import { Product } from "./types";

export const wpcOutdoor: Product[] = [
  {
    id: "PBS-WPC-001",
    name: "Standard Hollow Decking",
    slug: "wpc-standard-hollow-decking",
    category: "wpc-outdoor",
    subcategory: "Decking",
    description:
      "Hollow-core WPC decking board for pool decks, patios, and terraces. Wood grain embossed surface with anti-slip texture.",
    highlights: [
      "Anti-UV, moisture & termite resistant",
      "Wood grain embossed surface — anti-slip",
    ],
    specs: [
      { label: "Dimensions", value: "145 x 25mm (hollow core)" },
      { label: "Material", value: "Wood-Plastic Composite (WPC)" },
      { label: "Surface", value: "Wood Grain Embossed" },
      { label: "Colors", value: "Brown, Grey, Teak, Charcoal" },
      { label: "Application", value: "Pool Decks, Patios, Terraces" },
    ],
    image: "/images/products/wpc-outdoor/decking-standard.png",
    tags: ["decking", "hollow", "outdoor", "pool"],
    badge: "Best Seller",
  },
  {
    id: "PBS-WPC-002",
    name: "Co-Extrusion Premium Decking",
    slug: "wpc-coextrusion-premium-decking",
    category: "wpc-outdoor",
    subcategory: "Decking",
    description:
      "Dual-layer co-extrusion WPC decking with protective polymer cap. Enhanced UV, scratch, and stain resistance for premium outdoor projects.",
    highlights: [
      "Dual-layer co-extrusion — enhanced durability",
      "Premium polymer cap for UV & scratch resistance",
    ],
    specs: [
      { label: "Dimensions", value: "145 x 22mm (co-extrusion)" },
      { label: "Material", value: "WPC with Polymer Cap Layer" },
      { label: "Surface", value: "Two-Tone Wood Grain" },
      { label: "Colors", value: "Natural/Dark, Brown/Dark, Teak/Brown" },
      { label: "Application", value: "Premium Decks, Commercial, Hospitality" },
    ],
    image: "/images/products/wpc-outdoor/decking-coex.jpg",
    tags: ["decking", "premium", "coextrusion", "commercial"],
    badge: "New",
  },
  {
    id: "PBS-WPC-003",
    name: "WPC Wall Cladding",
    slug: "wpc-wall-cladding",
    category: "wpc-outdoor",
    subcategory: "Cladding",
    description:
      "Exterior-grade WPC wall cladding panels. Tongue-and-groove or clip-mount system for residential and commercial facade applications.",
    highlights: [
      "Weather-resistant exterior cladding",
      "Tongue-and-groove or clip-mount install",
    ],
    specs: [
      { label: "Dimensions", value: "146 x 21mm" },
      { label: "Material", value: "Wood-Plastic Composite (WPC)" },
      { label: "Profile", value: "Lap / Overlap" },
      { label: "Colors", value: "Walnut, Teak, Rosewood, Grey" },
      { label: "Application", value: "Exterior Facades, Feature Walls" },
    ],
    image: "/images/products/wpc-outdoor/cladding.png",
    tags: ["cladding", "exterior", "facade"],
  },
  {
    id: "PBS-WPC-004",
    name: "DIY Fence System",
    slug: "wpc-diy-fence-system",
    category: "wpc-outdoor",
    subcategory: "Fencing",
    description:
      "Horizontal-plank privacy fencing with aluminum posts. Tool-free DIY assembly system — no special skills required.",
    highlights: [
      "Tool-free assembly — DIY friendly",
      "Aluminum posts with WPC planks",
    ],
    specs: [
      { label: "Material", value: "WPC Planks + Aluminum Posts" },
      { label: "Style", value: "Horizontal Privacy Fence" },
      { label: "Colors", value: "Dark Grey, Charcoal" },
      { label: "Includes", value: "Posts, Caps, Clips, Hardware" },
      { label: "Application", value: "Residential Privacy Fencing" },
    ],
    image: "/images/products/wpc-outdoor/fence-diy.png",
    tags: ["fencing", "diy", "privacy", "horizontal"],
  },
  {
    id: "PBS-WPC-006",
    name: "Interlocking Deck Tiles",
    slug: "wpc-interlocking-deck-tiles",
    category: "wpc-outdoor",
    subcategory: "Decking",
    description:
      "Click-together WPC deck tiles for balconies, rooftops, and patios. Snap-on plastic base grid — no tools or adhesive needed.",
    highlights: [
      "Snap-together — no tools needed",
      "Perfect for balconies and rooftops",
    ],
    specs: [
      { label: "Dimensions", value: "300 x 300mm (12\" x 12\")" },
      { label: "Material", value: "WPC Slats on Plastic Grid Base" },
      { label: "Patterns", value: "4-Plank, 6-Plank, 8-Plank" },
      { label: "Colors", value: "Brown, Grey, Teak, Charcoal" },
      { label: "Application", value: "Balconies, Rooftops, Patios" },
    ],
    image: "/images/products/wpc-outdoor/decking-tiles.jpg",
    tags: ["decking", "tiles", "interlocking", "balcony"],
  },
];
