export interface PricingTier {
  minQty: number;
  maxQty: number | null;
  pricePerUnit: number;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  unit: string;
  moq: number;
  pricingTiers: PricingTier[];
  pbsCashPercent: number;
  description: string;
  inStock: boolean;
  leadTimeDays: string;
  image?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  subcategories: string[];
}

// ── Categories ──────────────────────────────────────────────────

export const productCategories: ProductCategory[] = [
  {
    id: "slabs",
    name: "Slabs",
    slug: "slabs",
    description: "Quartz, natural stone, porcelain slabs",
    subcategories: ["Quartz", "Quartzite", "Marble", "Granite", "Porcelain Slabs"],
  },
  {
    id: "tiles",
    name: "Tiles",
    slug: "tile",
    description: "Porcelain, ceramic, mosaic tiles",
    subcategories: ["Porcelain", "Ceramic", "Mosaic", "Wall Tiles"],
  },
  {
    id: "flooring",
    name: "Flooring",
    slug: "all-flooring",
    description: "SPC/LVP, hardwood, vinyl, laminate",
    subcategories: ["SPC/LVP", "Hardwood", "Vinyl", "Laminate"],
  },
  {
    id: "cabinets",
    name: "Cabinets",
    slug: "cabinets",
    description: "Kitchen, bathroom, and storage cabinets",
    subcategories: ["Kitchen Cabinets", "Bathroom Vanities", "Storage"],
  },
  {
    id: "wpc-walls",
    name: "WPC Walls",
    slug: "wpc-walls",
    description: "WPC wall panels for interior finishing",
    subcategories: ["Interior Panels", "Accent Walls", "Wainscoting"],
  },
  {
    id: "ceilings",
    name: "Ceilings",
    slug: "ceilings",
    description: "Ceiling tiles, panels, and systems",
    subcategories: ["Drop Ceiling Tiles", "Ceiling Panels", "Crown Molding"],
  },
  {
    id: "fencing",
    name: "Fencing",
    slug: "fencing",
    description: "Fencing materials for residential and commercial",
    subcategories: ["Vinyl Fencing", "Composite Fencing", "Metal Fencing"],
  },
  {
    id: "spc-lvp",
    name: "SPC/LVP Flooring",
    slug: "spc-lvp-flooring",
    description: "Stone Polymer Composite and Luxury Vinyl Plank",
    subcategories: ["SPC Rigid Core", "LVP Plank", "LVT Tile"],
  },
  {
    id: "sanitaryware",
    name: "Sanitaryware & Fixtures",
    slug: "sanitaryware-fixtures",
    description: "Toilets, sinks, faucets, bathroom fixtures",
    subcategories: ["Toilets", "Sinks & Basins", "Faucets", "Shower Systems"],
  },
  {
    id: "siding",
    name: "Siding & Cladding",
    slug: "siding-cladding",
    description: "Exterior siding and cladding materials",
    subcategories: ["Vinyl Siding", "Fiber Cement", "Composite Cladding"],
  },
  {
    id: "electrical",
    name: "Electrical Wires",
    slug: "electrical-wires",
    description: "Electrical wiring, conduit, and accessories",
    subcategories: ["Romex/NM Cable", "Conduit", "Wire & Cable"],
  },
  {
    id: "gas-water",
    name: "Gas & Water Accessories",
    slug: "gas-water-accessories",
    description: "Gas lines, water pipes, fittings, and accessories",
    subcategories: ["Gas Lines", "Water Pipes", "Fittings & Valves"],
  },
  {
    id: "plumbing",
    name: "Plumbing",
    slug: "plumbing",
    description: "Pipes, fittings, and plumbing supplies",
    subcategories: ["PVC Pipes", "Copper", "Fittings", "Valves"],
  },
  {
    id: "lighting",
    name: "Lighting",
    slug: "lighting",
    description: "Indoor and outdoor lighting fixtures",
    subcategories: ["Recessed", "Pendant", "Outdoor", "LED Panels"],
  },
  {
    id: "turf",
    name: "Artificial Turf",
    slug: "artificial-turf",
    description: "Synthetic grass for landscaping and recreation",
    subcategories: ["Landscape Turf", "Pet Turf", "Sports Turf"],
  },
];

// ── Sample Products (with MOQs and Pricing Tiers) ───────────────

export const products: Product[] = [
  // Slabs
  {
    id: "slab-001",
    name: "Calacatta Laza Quartz Slab",
    category: "slabs",
    subcategory: "Quartz",
    unit: "sq ft",
    moq: 50,
    pricingTiers: [
      { minQty: 50, maxQty: 200, pricePerUnit: 38, label: "Standard" },
      { minQty: 201, maxQty: 500, pricePerUnit: 34, label: "Volume" },
      { minQty: 501, maxQty: null, pricePerUnit: 30, label: "Bulk" },
    ],
    pbsCashPercent: 3,
    description: "Warm white base with dramatic gold veining. Popular for kitchen countertops and waterfall islands.",
    inStock: true,
    leadTimeDays: "3-5",
  },
  {
    id: "slab-002",
    name: "Taj Mahal Quartzite Slab",
    category: "slabs",
    subcategory: "Quartzite",
    unit: "sq ft",
    moq: 50,
    pricingTiers: [
      { minQty: 50, maxQty: 200, pricePerUnit: 65, label: "Standard" },
      { minQty: 201, maxQty: 500, pricePerUnit: 58, label: "Volume" },
      { minQty: 501, maxQty: null, pricePerUnit: 52, label: "Bulk" },
    ],
    pbsCashPercent: 3,
    description: "Natural stone with soft gold tone. #1 most-requested surface.",
    inStock: true,
    leadTimeDays: "3-7",
  },

  // Flooring
  {
    id: "floor-001",
    name: "SPC Rigid Core LVP — Oak Natural",
    category: "spc-lvp",
    subcategory: "SPC Rigid Core",
    unit: "sq ft",
    moq: 500,
    pricingTiers: [
      { minQty: 500, maxQty: 5000, pricePerUnit: 2.85, label: "Standard" },
      { minQty: 5001, maxQty: 20000, pricePerUnit: 2.45, label: "Volume" },
      { minQty: 20001, maxQty: null, pricePerUnit: 2.10, label: "Bulk" },
    ],
    pbsCashPercent: 2,
    description: "7x48 plank, 5.5mm with IXPE pad. Waterproof, 20mil wear layer.",
    inStock: true,
    leadTimeDays: "5-7",
  },
  {
    id: "floor-002",
    name: "LVP Plank — Gray Wash",
    category: "spc-lvp",
    subcategory: "LVP Plank",
    unit: "sq ft",
    moq: 500,
    pricingTiers: [
      { minQty: 500, maxQty: 5000, pricePerUnit: 1.95, label: "Standard" },
      { minQty: 5001, maxQty: 20000, pricePerUnit: 1.65, label: "Volume" },
      { minQty: 20001, maxQty: null, pricePerUnit: 1.40, label: "Bulk" },
    ],
    pbsCashPercent: 2,
    description: "6x36 plank, 4mm with backing. Budget-friendly for multifamily.",
    inStock: true,
    leadTimeDays: "5-10",
  },

  // Cabinets
  {
    id: "cab-001",
    name: "Shaker White Kitchen Cabinet Set",
    category: "cabinets",
    subcategory: "Kitchen Cabinets",
    unit: "linear ft",
    moq: 10,
    pricingTiers: [
      { minQty: 10, maxQty: 50, pricePerUnit: 145, label: "Standard" },
      { minQty: 51, maxQty: 200, pricePerUnit: 125, label: "Volume" },
      { minQty: 201, maxQty: null, pricePerUnit: 110, label: "Bulk" },
    ],
    pbsCashPercent: 3,
    description: "Ready-to-assemble shaker style. Soft-close hinges, plywood box.",
    inStock: true,
    leadTimeDays: "7-14",
  },
  {
    id: "cab-002",
    name: "Bathroom Vanity — 36\" Gray",
    category: "cabinets",
    subcategory: "Bathroom Vanities",
    unit: "unit",
    moq: 5,
    pricingTiers: [
      { minQty: 5, maxQty: 20, pricePerUnit: 320, label: "Standard" },
      { minQty: 21, maxQty: 50, pricePerUnit: 285, label: "Volume" },
      { minQty: 51, maxQty: null, pricePerUnit: 250, label: "Bulk" },
    ],
    pbsCashPercent: 3,
    description: "36\" single-sink vanity with cultured marble top. Soft-close drawers.",
    inStock: true,
    leadTimeDays: "7-14",
  },

  // WPC Walls
  {
    id: "wpc-001",
    name: "WPC Interior Wall Panel — Wood Grain",
    category: "wpc-walls",
    subcategory: "Interior Panels",
    unit: "sq ft",
    moq: 200,
    pricingTiers: [
      { minQty: 200, maxQty: 1000, pricePerUnit: 4.50, label: "Standard" },
      { minQty: 1001, maxQty: 5000, pricePerUnit: 3.85, label: "Volume" },
      { minQty: 5001, maxQty: null, pricePerUnit: 3.25, label: "Bulk" },
    ],
    pbsCashPercent: 2,
    description: "Waterproof WPC wall panels. Easy click-lock install. Multiple finishes.",
    inStock: true,
    leadTimeDays: "10-14",
  },

  // Fencing
  {
    id: "fence-001",
    name: "Vinyl Privacy Fence Panel — 6x8",
    category: "fencing",
    subcategory: "Vinyl Fencing",
    unit: "panel",
    moq: 20,
    pricingTiers: [
      { minQty: 20, maxQty: 100, pricePerUnit: 85, label: "Standard" },
      { minQty: 101, maxQty: 500, pricePerUnit: 72, label: "Volume" },
      { minQty: 501, maxQty: null, pricePerUnit: 62, label: "Bulk" },
    ],
    pbsCashPercent: 2,
    description: "6ft tall x 8ft wide privacy fence panel. UV resistant, no painting needed.",
    inStock: true,
    leadTimeDays: "7-10",
  },

  // Sanitaryware
  {
    id: "san-001",
    name: "Elongated Toilet — White",
    category: "sanitaryware",
    subcategory: "Toilets",
    unit: "unit",
    moq: 10,
    pricingTiers: [
      { minQty: 10, maxQty: 50, pricePerUnit: 165, label: "Standard" },
      { minQty: 51, maxQty: 200, pricePerUnit: 140, label: "Volume" },
      { minQty: 201, maxQty: null, pricePerUnit: 120, label: "Bulk" },
    ],
    pbsCashPercent: 2,
    description: "Elongated bowl, 1.28 GPF, WaterSense certified. ADA compliant.",
    inStock: true,
    leadTimeDays: "5-7",
  },

  // Siding
  {
    id: "sid-001",
    name: "Fiber Cement Siding — Lap",
    category: "siding",
    subcategory: "Fiber Cement",
    unit: "sq ft",
    moq: 500,
    pricingTiers: [
      { minQty: 500, maxQty: 2000, pricePerUnit: 3.20, label: "Standard" },
      { minQty: 2001, maxQty: 10000, pricePerUnit: 2.75, label: "Volume" },
      { minQty: 10001, maxQty: null, pricePerUnit: 2.40, label: "Bulk" },
    ],
    pbsCashPercent: 2,
    description: "8.25\" exposure lap siding. Pre-primed, 50-year warranty.",
    inStock: true,
    leadTimeDays: "7-14",
  },

  // Electrical
  {
    id: "elec-001",
    name: "14/2 Romex NM-B Cable",
    category: "electrical",
    subcategory: "Romex/NM Cable",
    unit: "ft",
    moq: 1000,
    pricingTiers: [
      { minQty: 1000, maxQty: 5000, pricePerUnit: 0.42, label: "Standard" },
      { minQty: 5001, maxQty: 25000, pricePerUnit: 0.36, label: "Volume" },
      { minQty: 25001, maxQty: null, pricePerUnit: 0.31, label: "Bulk" },
    ],
    pbsCashPercent: 1,
    description: "14 AWG, 2 conductor with ground. UL listed, residential grade.",
    inStock: true,
    leadTimeDays: "3-5",
  },

  // Tiles
  {
    id: "tile-001",
    name: "Porcelain Floor Tile — 24x24 White",
    category: "tiles",
    subcategory: "Porcelain",
    unit: "sq ft",
    moq: 100,
    pricingTiers: [
      { minQty: 100, maxQty: 500, pricePerUnit: 3.85, label: "Standard" },
      { minQty: 501, maxQty: 2000, pricePerUnit: 3.25, label: "Volume" },
      { minQty: 2001, maxQty: null, pricePerUnit: 2.80, label: "Bulk" },
    ],
    pbsCashPercent: 2,
    description: "24x24 polished porcelain. PEI 4 rated for commercial traffic.",
    inStock: true,
    leadTimeDays: "5-7",
  },
];

// ── Pricing Tier Labels ─────────────────────────────────────────

export const pbsClubTiers = [
  { name: "PBS Club Member", minSpend: 0, cashbackPercent: 2, priceLock: 7 },
  { name: "PBS Club Gold", minSpend: 10000, cashbackPercent: 3, priceLock: 10 },
  { name: "PBS Club Platinum", minSpend: 100000, cashbackPercent: 5, priceLock: 14 },
];
