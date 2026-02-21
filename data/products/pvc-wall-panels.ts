import { Product } from "./types";

export const pvcWallPanels: Product[] = [
  {
    id: "PBS-PVC-001",
    name: "Flat Panel T408",
    slug: "pvc-flat-panel-t408",
    category: "pvc-wall-panels",
    subcategory: "Flat Panel",
    description:
      "Smooth flat PVC wall panel for interior walls and ceilings. Lightweight, moisture-proof, and easy to install with tongue-and-groove joints.",
    highlights: [
      "100% waterproof — ideal for bathrooms & kitchens",
      "Lightweight 8mm panel, easy handling",
    ],
    specs: [
      { label: "Dimensions", value: "8 x 400 x 3000mm" },
      { label: "Packing", value: "5 planks per box" },
      { label: "Material", value: "PVC" },
      { label: "Application", value: "Interior Walls, Ceilings" },
      { label: "Installation", value: "Tongue-and-Groove" },
    ],
    image: "/images/products/pvc-wall-panels/flat-panel.jpg",
    tags: ["flat", "interior", "ceiling", "lightweight"],
    badge: "Best Seller",
  },
  {
    id: "PBS-PVC-002",
    name: "Small Wave Cladding",
    slug: "pvc-small-wave-cladding",
    category: "pvc-wall-panels",
    subcategory: "Fluted Panel",
    description:
      "5-plank small wave PVC wall cladding. Creates a subtle textured accent wall with a modern ribbed profile.",
    highlights: [
      "Modern ribbed texture — 5 small waves",
      "Moisture-proof for wet areas",
    ],
    specs: [
      { label: "Dimensions", value: "10 x 150 x 3000mm" },
      { label: "Packing", value: "10 planks per box" },
      { label: "Material", value: "PVC" },
      { label: "Profile", value: "5 Small Waves" },
      { label: "Application", value: "Interior Accent Walls" },
    ],
    image: "/images/products/pvc-wall-panels/small-wave.jpg",
    tags: ["fluted", "ribbed", "accent", "texture"],
  },
  {
    id: "PBS-PVC-003",
    name: "Medium Wave Cladding",
    slug: "pvc-medium-wave-cladding",
    category: "pvc-wall-panels",
    subcategory: "Fluted Panel",
    description:
      "5-plank medium wave PVC wall cladding. A bolder ribbed profile for feature walls, wainscoting, and commercial interiors.",
    highlights: [
      "Bold medium wave ribbed profile",
      "No painting or finishing required",
    ],
    specs: [
      { label: "Dimensions", value: "19.7 x 220 x 3000mm" },
      { label: "Packing", value: "5 planks per box" },
      { label: "Material", value: "PVC" },
      { label: "Profile", value: "5 Medium Waves" },
      { label: "Application", value: "Feature Walls, Wainscoting" },
    ],
    image: "/images/products/pvc-wall-panels/medium-wave.jpg",
    tags: ["fluted", "ribbed", "feature-wall", "bold"],
    badge: "New",
  },
  {
    id: "PBS-PVC-004",
    name: "Large Wave Cladding",
    slug: "pvc-large-wave-cladding",
    category: "pvc-wall-panels",
    subcategory: "V-Groove",
    description:
      "3-plank large wave PVC wall cladding. Deep V-groove profile for a dramatic, architectural wall treatment.",
    highlights: [
      "Deep V-groove — dramatic architectural profile",
      "Termite-proof and moisture-resistant",
    ],
    specs: [
      { label: "Dimensions", value: "18 x 200 x 3000mm" },
      { label: "Packing", value: "6 planks per box" },
      { label: "Material", value: "PVC" },
      { label: "Profile", value: "3 Big Waves" },
      { label: "Application", value: "Feature Walls, Architectural Accents" },
    ],
    image: "/images/products/pvc-wall-panels/big-wave.jpg",
    tags: ["v-groove", "dramatic", "architectural", "deep"],
  },
];
