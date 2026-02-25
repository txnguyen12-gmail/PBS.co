import { Product } from "./types";

export const showers: Product[] = [
  // Shower Mixers
  {
    id: "PBS-SHW-001",
    name: "Exposed Shower Mixer",
    slug: "exposed-shower-mixer",
    category: "showers",
    subcategory: "Shower Mixer",
    description:
      "Exposed shower mixer with adjustable hand shower and wall-mount bracket. Single-lever temperature control with ceramic cartridge for precise mixing.",
    highlights: [
      "Single-lever temperature control",
      "Adjustable hand shower with wall bracket",
    ],
    specs: [
      { label: "Type", value: "Exposed Shower Mixer" },
      { label: "Control", value: "Single-Lever" },
      { label: "Cartridge", value: "Ceramic Disc" },
      { label: "Shower", value: "Adjustable Hand Shower" },
      { label: "Finish", value: "Chrome" },
    ],
    image: "/images/products/showers/ta-8094.png",
    tags: ["shower", "mixer", "exposed", "hand-shower"],
    badge: "New",
  },
  {
    id: "PBS-SHW-002",
    name: "Rainfall Shower Combo",
    slug: "rainfall-shower-combo",
    category: "showers",
    subcategory: "Shower Mixer",
    description:
      "Wall-mounted shower mixer with overhead rainfall head and hand shower combo. Diverter valve switches between rainfall and hand shower modes.",
    highlights: [
      "Rainfall head + hand shower combo",
      "Diverter valve for dual shower modes",
    ],
    specs: [
      { label: "Type", value: "Wall-Mounted Shower Mixer" },
      { label: "Control", value: "Single-Lever with Diverter" },
      { label: "Heads", value: "Rainfall + Hand Shower" },
      { label: "Cartridge", value: "Ceramic Disc" },
      { label: "Finish", value: "Chrome" },
    ],
    image: "/images/products/showers/ta-603m.jpg",
    tags: ["shower", "mixer", "rainfall", "dual"],
    badge: "Best Seller",
  },
  {
    id: "PBS-SHW-003",
    name: "Thermostatic Shower Mixer",
    slug: "thermostatic-shower-mixer",
    category: "showers",
    subcategory: "Shower Mixer",
    description:
      "Thermostatic shower mixer with anti-scald protection. Maintains constant water temperature even when supply pressure fluctuates — ideal for family bathrooms.",
    highlights: [
      "Thermostatic anti-scald protection",
      "Constant temperature under pressure changes",
    ],
    specs: [
      { label: "Type", value: "Thermostatic Shower Mixer" },
      { label: "Control", value: "Thermostatic with Safety Stop" },
      { label: "Cartridge", value: "Thermostatic Cartridge" },
      { label: "Shower", value: "Hand Shower Included" },
      { label: "Finish", value: "Chrome" },
    ],
    image: "/images/products/showers/ta-7914.jpg",
    tags: ["shower", "mixer", "thermostatic", "anti-scald"],
  },
  // Concealed Shower Mixers
  {
    id: "PBS-SHW-004",
    name: "Concealed Mixer Single-Lever",
    slug: "concealed-mixer-single-lever",
    category: "showers",
    subcategory: "Concealed Shower Mixer",
    description:
      "In-wall concealed shower mixer with trim plate and single-lever control. All plumbing hidden behind the wall for a clean, minimal bathroom look.",
    highlights: [
      "Concealed in-wall installation",
      "Clean minimal trim plate design",
    ],
    specs: [
      { label: "Type", value: "Concealed In-Wall Mixer" },
      { label: "Control", value: "Single-Lever" },
      { label: "Cartridge", value: "Ceramic Disc" },
      { label: "Installation", value: "In-Wall (rough-in valve included)" },
      { label: "Finish", value: "Chrome" },
    ],
    image: "/images/products/showers/ta-7915.jpg",
    tags: ["shower", "concealed", "in-wall", "minimal"],
  },
  {
    id: "PBS-SHW-005",
    name: "Concealed Mixer Two-Function",
    slug: "concealed-mixer-two-function",
    category: "showers",
    subcategory: "Concealed Shower Mixer",
    description:
      "Two-function concealed shower mixer with diverter. Controls both overhead rain shower and hand shower from a single in-wall valve body.",
    highlights: [
      "Two-function diverter (rain + hand shower)",
      "Single in-wall valve body",
    ],
    specs: [
      { label: "Type", value: "Concealed Two-Function Mixer" },
      { label: "Control", value: "Single-Lever with Diverter" },
      { label: "Functions", value: "Rain Shower + Hand Shower" },
      { label: "Installation", value: "In-Wall (rough-in valve included)" },
      { label: "Finish", value: "Chrome" },
    ],
    image: "/images/products/showers/ta-6134.jpg",
    tags: ["shower", "concealed", "two-function", "diverter"],
  },
  {
    id: "PBS-SHW-006",
    name: "Concealed Mixer Three-Function",
    slug: "concealed-mixer-three-function",
    category: "showers",
    subcategory: "Concealed Shower Mixer",
    description:
      "Three-function concealed shower mixer with separate controls for temperature and flow. Supports rain shower, hand shower, and body jets simultaneously.",
    highlights: [
      "Three-function output (rain, hand, body jets)",
      "Separate temperature and flow controls",
    ],
    specs: [
      { label: "Type", value: "Concealed Three-Function Mixer" },
      { label: "Control", value: "Dual-Handle (Temp + Flow)" },
      { label: "Functions", value: "Rain + Hand Shower + Body Jets" },
      { label: "Installation", value: "In-Wall (rough-in valve included)" },
      { label: "Finish", value: "Chrome" },
    ],
    image: "/images/products/showers/ta-6054.jpg",
    tags: ["shower", "concealed", "three-function", "luxury"],
  },
];
