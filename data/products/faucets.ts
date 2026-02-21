import { Product } from "./types";

export const faucets: Product[] = [
  {
    id: "PBS-FAU-001",
    name: "Single-Handle Kitchen Faucet",
    slug: "single-handle-kitchen-faucet",
    category: "faucets",
    subcategory: "Kitchen Faucet",
    description:
      "Pull-down single-handle kitchen faucet with dual spray modes. Chrome finish with ceramic disc cartridge for drip-free performance.",
    highlights: [
      "Pull-down spray head with dual modes",
      "Ceramic disc cartridge — drip-free",
    ],
    specs: [
      { label: "Type", value: "Single-Handle Pull-Down" },
      { label: "Finish", value: "Chrome" },
      { label: "Spout Height", value: '16.5"' },
      { label: "Spray Modes", value: "Stream, Spray" },
      { label: "Cartridge", value: "Ceramic Disc" },
    ],
    image: "",
    tags: ["kitchen", "pull-down", "chrome", "single-handle"],
    badge: "Best Seller",
  },
  {
    id: "PBS-FAU-002",
    name: "Kitchen Faucet — Matte Black",
    slug: "kitchen-faucet-matte-black",
    category: "faucets",
    subcategory: "Kitchen Faucet",
    description:
      "Modern matte black kitchen faucet with pull-down sprayer. Statement piece for contemporary kitchen designs.",
    highlights: [
      "Matte black finish — fingerprint resistant",
      "360-degree swivel spout",
    ],
    specs: [
      { label: "Type", value: "Single-Handle Pull-Down" },
      { label: "Finish", value: "Matte Black" },
      { label: "Spout Height", value: '16"' },
      { label: "Spray Modes", value: "Stream, Spray" },
      { label: "Cartridge", value: "Ceramic Disc" },
    ],
    image: "",
    tags: ["kitchen", "pull-down", "matte-black", "modern"],
    badge: "New",
  },
  {
    id: "PBS-FAU-003",
    name: "Basin Mixer Faucet — Chrome",
    slug: "basin-mixer-chrome",
    category: "faucets",
    subcategory: "Basin Faucet",
    description:
      "Single-hole basin mixer faucet in polished chrome. Clean, minimal design for bathroom vanities and lavatories.",
    highlights: [
      "Single-hole installation",
      "Hot/cold water mixer lever",
    ],
    specs: [
      { label: "Type", value: "Single-Hole Basin Mixer" },
      { label: "Finish", value: "Polished Chrome" },
      { label: "Spout Height", value: '7"' },
      { label: "Cartridge", value: "Ceramic Disc" },
      { label: "Installation", value: "Single-Hole, Deck Mount" },
    ],
    image: "",
    tags: ["basin", "mixer", "chrome", "bathroom"],
  },
  {
    id: "PBS-FAU-004",
    name: "Basin Mixer Faucet — Brushed Nickel",
    slug: "basin-mixer-brushed-nickel",
    category: "faucets",
    subcategory: "Basin Faucet",
    description:
      "Basin mixer faucet in brushed nickel finish. Warm metallic tone that resists fingerprints and water spots.",
    highlights: [
      "Brushed nickel — resists fingerprints",
      "Ceramic disc for drip-free operation",
    ],
    specs: [
      { label: "Type", value: "Single-Hole Basin Mixer" },
      { label: "Finish", value: "Brushed Nickel" },
      { label: "Spout Height", value: '7"' },
      { label: "Cartridge", value: "Ceramic Disc" },
      { label: "Installation", value: "Single-Hole, Deck Mount" },
    ],
    image: "",
    tags: ["basin", "mixer", "brushed-nickel", "bathroom"],
  },
  {
    id: "PBS-FAU-005",
    name: "Tall Vessel Faucet",
    slug: "tall-vessel-faucet",
    category: "faucets",
    subcategory: "Basin Faucet",
    description:
      "Tall single-handle faucet designed for vessel (countertop) basins. Extended spout height clears above-counter sinks.",
    highlights: [
      "Extended height for vessel basins",
      "Waterfall-style spout option",
    ],
    specs: [
      { label: "Type", value: "Tall Vessel Faucet" },
      { label: "Finish", value: "Chrome / Matte Black" },
      { label: "Spout Height", value: '12"' },
      { label: "Cartridge", value: "Ceramic Disc" },
      { label: "Installation", value: "Single-Hole, Deck Mount" },
    ],
    image: "",
    tags: ["basin", "vessel", "tall", "waterfall"],
  },
  {
    id: "PBS-FAU-006",
    name: "Angle Valve Set",
    slug: "angle-valve-set",
    category: "faucets",
    subcategory: "Accessories",
    description:
      "Chrome-plated brass angle valve set for toilet and basin supply lines. Essential hardware for any bathroom installation.",
    highlights: [
      "Solid brass construction — chrome plated",
      "Standard 1/2\" connections",
    ],
    specs: [
      { label: "Material", value: "Solid Brass, Chrome Plated" },
      { label: "Size", value: '1/2" inlet, 3/8" outlet' },
      { label: "Application", value: "Toilet & Basin Supply Lines" },
    ],
    image: "",
    tags: ["accessories", "valve", "brass", "chrome"],
  },
  {
    id: "PBS-FAU-007",
    name: "Pop-Up Drain Assembly",
    slug: "pop-up-drain-assembly",
    category: "faucets",
    subcategory: "Accessories",
    description:
      "Universal pop-up drain assembly for bathroom basins. Press-to-open mechanism with overflow compatibility.",
    highlights: [
      "Press-to-open mechanism",
      "Universal fit for standard basins",
    ],
    specs: [
      { label: "Material", value: "Brass with Chrome Finish" },
      { label: "Drain Size", value: '1-1/4"' },
      { label: "Overflow", value: "Compatible" },
      { label: "Application", value: "Bathroom Basins" },
    ],
    image: "",
    tags: ["accessories", "drain", "pop-up", "basin"],
  },
];
