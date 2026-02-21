import { ProductCategory } from "./types";

export const productCategories: ProductCategory[] = [
  {
    id: "cabinets",
    name: "Kitchen Cabinets",
    slug: "cabinets",
    description:
      "Ready-to-assemble and pre-assembled kitchen cabinets in shaker, flat-panel, and raised-panel styles. Soft-close hardware, plywood construction, and multiple finish options.",
    image: "/images/products/cabinets/category.jpg",
    subcategories: ["Shaker", "Flat Panel", "Raised Panel"],
  },
  {
    id: "quartz-slabs",
    name: "Quartz Slabs",
    slug: "quartz-slabs",
    description:
      "Engineered quartz slabs for countertops, vanities, and feature walls. Consistent color, non-porous surface, and low maintenance.",
    image: "/images/products/quartz-slabs/category.jpg",
    subcategories: ["Marble Look", "Solid Color", "Veined", "Concrete Look"],
  },
  {
    id: "spc-flooring",
    name: "SPC/LVP Flooring",
    slug: "spc-flooring",
    description:
      "Stone Polymer Composite and Luxury Vinyl Plank flooring. 100% waterproof, scratch-resistant, and easy click-lock installation.",
    image: "/images/products/spc-flooring/category.jpg",
    subcategories: ["Wood Look", "Stone Look", "Light Tones", "Dark Tones"],
  },
  {
    id: "pvc-wall-panels",
    name: "PVC Wall Panels",
    slug: "pvc-wall-panels",
    description:
      "Lightweight PVC wall panels for interior walls and ceilings. Waterproof, easy to install, and available in multiple profiles and finishes.",
    image: "/images/products/pvc-wall-panels/category.jpg",
    subcategories: ["Flat Panel", "Fluted Panel", "V-Groove"],
  },
  {
    id: "wpc-outdoor",
    name: "WPC Outdoor",
    slug: "wpc-outdoor",
    description:
      "Wood-Plastic Composite decking, fencing, and cladding for outdoor applications. Weather-resistant, low-maintenance, and splinter-free.",
    image: "/images/products/wpc-outdoor/category.jpg",
    subcategories: ["Decking", "Fencing", "Cladding"],
  },
  {
    id: "sanitaryware",
    name: "Sanitaryware",
    slug: "sanitaryware",
    description:
      "Toilets, basins, and bathroom fixtures. One-piece, two-piece, and wall-hung designs with water-saving flush systems.",
    image: "/images/products/sanitaryware/category.jpg",
    subcategories: [
      "One-Piece Toilet",
      "Two-Piece Toilet",
      "Wall-Hung Toilet",
      "Basin",
    ],
  },
];
