import { Product } from "./types";

export const faucets: Product[] = [
  // Kitchen Mixers
  {
    id: "PBS-FAU-001",
    name: "Kitchen Mixer High-Arc",
    slug: "kitchen-mixer-high-arc",
    category: "faucets",
    subcategory: "Kitchen Mixer",
    description:
      "Single-handle kitchen mixer with high-arc spout and ceramic disc cartridge. Smooth 90° operation, chrome finish, and braided supply lines included.",
    highlights: [
      "High-arc spout with 360° swivel",
      "Ceramic disc cartridge — drip-free",
    ],
    specs: [
      { label: "Type", value: "Single-Handle Kitchen Mixer" },
      { label: "Spout", value: "High-Arc, 360° Swivel" },
      { label: "Cartridge", value: "Ceramic Disc" },
      { label: "Finish", value: "Chrome" },
      { label: "Supply Lines", value: "Braided Stainless Steel" },
    ],
    image: "/images/products/faucets/ta-769l.jpg",
    tags: ["kitchen", "mixer", "single-handle", "chrome"],
    badge: "New",
  },
  {
    id: "PBS-FAU-002",
    name: "Kitchen Mixer Geometric",
    slug: "kitchen-mixer-geometric",
    category: "faucets",
    subcategory: "Kitchen Mixer",
    description:
      "Contemporary kitchen mixer with clean geometric lines. Single-lever control, hot/cold mixing, and quick-connect installation for fast project turnaround.",
    highlights: [
      "Geometric design — modern kitchen aesthetic",
      "Quick-connect fittings for fast install",
    ],
    specs: [
      { label: "Type", value: "Single-Lever Kitchen Mixer" },
      { label: "Spout", value: "Fixed High-Arc" },
      { label: "Cartridge", value: "Ceramic Disc" },
      { label: "Finish", value: "Chrome" },
      { label: "Installation", value: "Single-Hole" },
    ],
    image: "/images/products/faucets/ta-6963.jpg",
    tags: ["kitchen", "mixer", "single-lever", "modern"],
  },
  {
    id: "PBS-FAU-003",
    name: "Kitchen Mixer Commercial",
    slug: "kitchen-mixer-commercial",
    category: "faucets",
    subcategory: "Kitchen Mixer",
    description:
      "Commercial-style kitchen mixer with spring coil neck and dual-function spray head. Toggle between stream and spray modes for versatile kitchen use.",
    highlights: [
      "Spring coil neck — commercial look",
      "Dual-function spray head (stream/spray)",
    ],
    specs: [
      { label: "Type", value: "Commercial-Style Kitchen Mixer" },
      { label: "Spout", value: "Spring Coil, High-Arc" },
      { label: "Spray", value: "Dual-Function (Stream/Spray)" },
      { label: "Cartridge", value: "Ceramic Disc" },
      { label: "Finish", value: "Chrome" },
    ],
    image: "/images/products/faucets/ta-8293.jpg",
    tags: ["kitchen", "mixer", "commercial", "spring-coil"],
  },
  // Pullout Mixers
  {
    id: "PBS-FAU-004",
    name: "Pullout Mixer Magnetic",
    slug: "pullout-mixer-magnetic",
    category: "faucets",
    subcategory: "Pullout Mixer",
    description:
      "Kitchen mixer with pullout spray head and retractable hose. Magnetic docking keeps the head secure. Ideal for double-bowl sinks and prep work.",
    highlights: [
      "Pullout spray head with magnetic docking",
      "Retractable hose — full sink coverage",
    ],
    specs: [
      { label: "Type", value: "Pullout Kitchen Mixer" },
      { label: "Spout", value: "Pullout with Magnetic Dock" },
      { label: "Hose", value: "Retractable Braided" },
      { label: "Cartridge", value: "Ceramic Disc" },
      { label: "Finish", value: "Chrome" },
    ],
    image: "/images/products/faucets/ta-623a.png",
    tags: ["kitchen", "pullout", "magnetic", "spray"],
    badge: "Best Seller",
  },
  {
    id: "PBS-FAU-005",
    name: "Pullout Mixer Compact",
    slug: "pullout-mixer-compact",
    category: "faucets",
    subcategory: "Pullout Mixer",
    description:
      "Compact pullout mixer with low-profile spout. Space-saving design for smaller kitchens without sacrificing pullout functionality.",
    highlights: [
      "Low-profile design for compact kitchens",
      "Pullout spray with smooth retraction",
    ],
    specs: [
      { label: "Type", value: "Pullout Kitchen Mixer" },
      { label: "Spout", value: "Low-Profile Pullout" },
      { label: "Hose", value: "Retractable" },
      { label: "Cartridge", value: "Ceramic Disc" },
      { label: "Finish", value: "Chrome" },
    ],
    image: "/images/products/faucets/ta-7653.jpg",
    tags: ["kitchen", "pullout", "compact", "low-profile"],
  },
  {
    id: "PBS-FAU-006",
    name: "Pullout Mixer Tall",
    slug: "pullout-mixer-tall",
    category: "faucets",
    subcategory: "Pullout Mixer",
    description:
      "Premium pullout mixer with dual-function spray head and weighted hose for smooth retraction. Tall spout provides clearance for large pots and cookware.",
    highlights: [
      "Tall spout — clearance for large pots",
      "Weighted hose for auto-retraction",
    ],
    specs: [
      { label: "Type", value: "Pullout Kitchen Mixer" },
      { label: "Spout", value: "Tall Pullout" },
      { label: "Spray", value: "Dual-Function (Stream/Spray)" },
      { label: "Hose", value: "Weighted Auto-Retract" },
      { label: "Finish", value: "Chrome" },
    ],
    image: "/images/products/faucets/ta-632a.png",
    tags: ["kitchen", "pullout", "tall", "dual-function"],
  },
];
