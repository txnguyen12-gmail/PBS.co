import { Product } from "./types";

const commonSpecs = [
  { label: "Plank Size", value: '48" x 7.2" (1220 x 182 mm)' },
  { label: "Total Thickness", value: "5.5mm" },
  { label: "Core Layer", value: "4mm SPC Rigid Core" },
  { label: "Underlayment", value: "1.5mm IXPE Pad (attached)" },
  { label: "Click System", value: "UNICLIC" },
  { label: "Texture", value: "Matt Wood Grain" },
];

const commonHighlights = [
  "100% waterproof — SPC rigid core",
  "Click-lock install, no glue needed",
];

export const spcFlooring: Product[] = [
  {
    id: "PBS-FLR-001",
    name: "Citrine",
    slug: "spc-citrine",
    category: "spc-flooring",
    subcategory: "Light Tones",
    description:
      "Warm golden oak tone with honey highlights. A bright, inviting plank that adds warmth to any living space.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/citrine.jpg",
    tags: ["light", "oak", "warm", "golden"],
  },
  {
    id: "PBS-FLR-002",
    name: "Sage",
    slug: "spc-sage",
    category: "spc-flooring",
    subcategory: "Light Tones",
    description:
      "Cool grey with knotty wood character. A rustic-modern plank that brings natural texture to contemporary interiors.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/sage.jpg",
    tags: ["light", "grey", "cool", "knotty"],
  },
  {
    id: "PBS-FLR-003",
    name: "Sandy",
    slug: "spc-sandy",
    category: "spc-flooring",
    subcategory: "Light Tones",
    description:
      "Warm greige (grey-beige) tone with natural knots. A versatile neutral that bridges warm and cool color palettes.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/sandy.jpg",
    tags: ["light", "greige", "neutral"],
    badge: "Best Seller",
  },
  {
    id: "PBS-FLR-004",
    name: "Mocha",
    slug: "spc-mocha",
    category: "spc-flooring",
    subcategory: "Dark Tones",
    description:
      "Medium brown with rustic knot character. A classic wood-look plank for living rooms, bedrooms, and hallways.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/mocha.jpg",
    tags: ["dark", "brown", "rustic"],
  },
  {
    id: "PBS-FLR-005",
    name: "Bronco",
    slug: "spc-bronco",
    category: "spc-flooring",
    subcategory: "Dark Tones",
    description:
      "Dark charcoal grey with a weathered, aged look. Bold statement flooring for modern and industrial-inspired interiors.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/bronco.jpg",
    tags: ["dark", "charcoal", "weathered"],
  },
  {
    id: "PBS-FLR-006",
    name: "Hazel",
    slug: "spc-hazel",
    category: "spc-flooring",
    subcategory: "Wood Look",
    description:
      "Light natural oak with clean, even grain. A timeless wood-look plank suitable for any residential or commercial space.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/hazel.jpg",
    tags: ["wood-look", "oak", "natural", "light"],
  },
  {
    id: "PBS-FLR-007",
    name: "Monsoon",
    slug: "spc-monsoon",
    category: "spc-flooring",
    subcategory: "Light Tones",
    description:
      "Light silver-grey with soft grain pattern. A modern, airy tone for open-concept living spaces.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/monsoon.jpg",
    tags: ["light", "grey", "silver", "modern"],
  },
  {
    id: "PBS-FLR-008",
    name: "Barley",
    slug: "spc-barley",
    category: "spc-flooring",
    subcategory: "Wood Look",
    description:
      "Medium warm oak with natural wood tone. A classic all-around plank that brings comfort and warmth to any room.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/barley.jpg",
    tags: ["wood-look", "oak", "warm", "medium"],
    badge: "Best Seller",
  },
  {
    id: "PBS-FLR-009",
    name: "Silk",
    slug: "spc-silk",
    category: "spc-flooring",
    subcategory: "Light Tones",
    description:
      "Very light blush-grey with subtle grain. A delicate, refined plank for bedrooms and spa-like bathrooms.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/silk.jpg",
    tags: ["light", "blush", "grey", "subtle"],
  },
  {
    id: "PBS-FLR-010",
    name: "Hurricane",
    slug: "spc-hurricane",
    category: "spc-flooring",
    subcategory: "Dark Tones",
    description:
      "Medium grey with swirl grain pattern. A distinctive, contemporary plank with bold character.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/hurricane.jpg",
    tags: ["dark", "grey", "swirl", "contemporary"],
  },
  {
    id: "PBS-FLR-011",
    name: "Sandrift",
    slug: "spc-sandrift",
    category: "spc-flooring",
    subcategory: "Light Tones",
    description:
      "Light natural oak with golden highlights. A warm, sun-kissed plank for coastal and farmhouse-style homes.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/sandrift.jpg",
    tags: ["light", "oak", "golden", "coastal"],
  },
  {
    id: "PBS-FLR-012",
    name: "Almond",
    slug: "spc-almond",
    category: "spc-flooring",
    subcategory: "Wood Look",
    description:
      "Medium warm brown with prominent grain. A rich, expressive plank that makes a statement in any room.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/almond.jpg",
    tags: ["wood-look", "brown", "warm", "prominent-grain"],
  },
  {
    id: "PBS-FLR-013",
    name: "Flint",
    slug: "spc-flint",
    category: "spc-flooring",
    subcategory: "Light Tones",
    description:
      "Light honey-tan with soft grain. A gentle, natural tone that creates a warm and inviting atmosphere.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/flint.jpg",
    tags: ["light", "honey", "tan", "soft"],
  },
  {
    id: "PBS-FLR-014",
    name: "Muesli",
    slug: "spc-muesli",
    category: "spc-flooring",
    subcategory: "Wood Look",
    description:
      "Rich golden oak with rustic character. A deeply textured plank for homes that celebrate natural beauty.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/muesli.jpg",
    tags: ["wood-look", "golden", "oak", "rustic"],
  },
  {
    id: "PBS-FLR-015",
    name: "Beige",
    slug: "spc-beige",
    category: "spc-flooring",
    subcategory: "Light Tones",
    description:
      "Natural light beige with a maple-like finish. A clean, neutral plank for versatile design applications.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/beige.jpg",
    tags: ["light", "beige", "maple", "neutral"],
  },
  {
    id: "PBS-FLR-016",
    name: "Chestnut",
    slug: "spc-chestnut",
    category: "spc-flooring",
    subcategory: "Dark Tones",
    description:
      "Dark warm brown with muted grain. A refined, sophisticated plank for formal living spaces and offices.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/chestnut.jpg",
    tags: ["dark", "brown", "warm", "muted"],
  },
  {
    id: "PBS-FLR-017",
    name: "Nebula",
    slug: "spc-nebula",
    category: "spc-flooring",
    subcategory: "Light Tones",
    description:
      "Very light cream-blonde with pine-like grain. A bright, airy plank perfect for Scandinavian-inspired interiors.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/nebula.jpg",
    tags: ["light", "cream", "blonde", "scandinavian"],
  },
  {
    id: "PBS-FLR-018",
    name: "Equinox",
    slug: "spc-equinox",
    category: "spc-flooring",
    subcategory: "Stone Look",
    description:
      "Light grey with muted soft grain. Enhanced 0.5mm wear layer for commercial-grade durability in high-traffic areas.",
    highlights: [
      "Enhanced 0.5mm wear layer — commercial grade",
      "Click-lock install, no glue needed",
    ],
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.5mm (Commercial Grade)" },
    ],
    image: "/images/products/spc-flooring/equinox.jpg",
    tags: ["stone-look", "grey", "commercial", "premium"],
    badge: "New",
  },
  {
    id: "PBS-FLR-019",
    name: "Vega",
    slug: "spc-vega",
    category: "spc-flooring",
    subcategory: "Dark Tones",
    description:
      "Cool medium grey with bold grain pattern. A strong, contemporary plank for modern homes and commercial spaces.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/vega.jpg",
    tags: ["dark", "grey", "bold", "contemporary"],
  },
  {
    id: "PBS-FLR-020",
    name: "Aurora",
    slug: "spc-aurora",
    category: "spc-flooring",
    subcategory: "Light Tones",
    description:
      "Light warm taupe with elegant grain. A refined, luxurious plank for bedrooms and upscale living areas.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/aurora.jpg",
    tags: ["light", "taupe", "warm", "elegant"],
  },
  {
    id: "PBS-FLR-021",
    name: "Umbra",
    slug: "spc-umbra",
    category: "spc-flooring",
    subcategory: "Stone Look",
    description:
      "Very light cream with linear travertine-like grain. A stone-inspired plank for bathrooms and entryways.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/umbra.jpg",
    tags: ["stone-look", "cream", "travertine", "linear"],
  },
  {
    id: "PBS-FLR-022",
    name: "Noctis",
    slug: "spc-noctis",
    category: "spc-flooring",
    subcategory: "Wood Look",
    description:
      "Light warm grey-beige with classic oak grain. A balanced neutral that works across all residential and commercial applications.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/noctis.jpg",
    tags: ["wood-look", "grey-beige", "oak", "neutral"],
  },
  {
    id: "PBS-FLR-023",
    name: "Zodiac",
    slug: "spc-zodiac",
    category: "spc-flooring",
    subcategory: "Wood Look",
    description:
      "Light golden natural oak with clean, even grain. A bright and cheerful plank for kitchens and open-plan living.",
    highlights: commonHighlights,
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.3mm" },
    ],
    image: "/images/products/spc-flooring/zodiac.jpg",
    tags: ["wood-look", "golden", "oak", "clean"],
  },
  {
    id: "PBS-FLR-024",
    name: "Sidra",
    slug: "spc-sidra",
    category: "spc-flooring",
    subcategory: "Wood Look",
    description:
      "Medium warm brown oak with classic grain. Enhanced 0.5mm wear layer for commercial-grade performance.",
    highlights: [
      "Enhanced 0.5mm wear layer — commercial grade",
      "Click-lock install, no glue needed",
    ],
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.5mm (Commercial Grade)" },
    ],
    image: "/images/products/spc-flooring/sidra.jpg",
    tags: ["wood-look", "brown", "oak", "commercial", "premium"],
  },
  {
    id: "PBS-FLR-025",
    name: "Cyra",
    slug: "spc-cyra",
    category: "spc-flooring",
    subcategory: "Light Tones",
    description:
      "Light sandy oak with subtle grain. Enhanced 0.5mm wear layer provides extra durability for busy households and commercial spaces.",
    highlights: [
      "Enhanced 0.5mm wear layer — commercial grade",
      "Click-lock install, no glue needed",
    ],
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.5mm (Commercial Grade)" },
    ],
    image: "/images/products/spc-flooring/cyra.jpg",
    tags: ["light", "sandy", "oak", "commercial", "premium"],
  },
  {
    id: "PBS-FLR-026",
    name: "Comet",
    slug: "spc-comet",
    category: "spc-flooring",
    subcategory: "Wood Look",
    description:
      "Light-medium natural oak with soft grain. Enhanced 0.5mm wear layer — ideal for multifamily and hospitality projects.",
    highlights: [
      "Enhanced 0.5mm wear layer — commercial grade",
      "Click-lock install, no glue needed",
    ],
    specs: [
      ...commonSpecs,
      { label: "Wear Layer", value: "0.5mm (Commercial Grade)" },
    ],
    image: "/images/products/spc-flooring/comet.jpg",
    tags: ["wood-look", "natural", "oak", "commercial", "premium"],
    badge: "New",
  },
];
