"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plus,
  FileText,
  Heart,
  ShoppingBag,
  Info,
  Phone,
  UserCircle,
  Send,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

// ━━━ Webhook Configuration ━━━
const WEBHOOK_URL = "/api/leads";
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ── Knowledge Base ──────────────────────────────────────────────

const KB = {
  products: {
    slabs: {
      description:
        "We carry premium quartz, natural stone, and porcelain slabs from brands like MSI, Caesarstone, Cambria, Silestone, Dekton, and more. Popular choices include Taj Mahal quartzite, Calacatta quartz, and a wide range of marble-look options.",
      brands: [
        "MSI",
        "Silestone",
        "Caesarstone",
        "Cambria",
        "Dekton",
        "Sensa",
        "LX Hausys",
        "Raphael Stone",
      ],
    },
    tiles: {
      description:
        "Our tile collection includes porcelain, ceramic, and mosaic tiles from top manufacturers like Daltile, Roca, Cerdomus, and more — perfect for kitchens, bathrooms, and commercial projects.",
      brands: ["Daltile", "Roca", "Cerdomus", "Sintesi", "Aquashield"],
    },
    flooring: {
      description:
        "We offer hardwood, vinyl, laminate, and engineered flooring options. Brands include Mccarran, Ladson, and more — all at wholesale pricing.",
      brands: ["Mccarran", "Ladson", "Amalfi"],
    },
    cabinets: {
      description:
        "We supply a full range of kitchen and bathroom cabinets — from stock to custom-grade — at wholesale pricing with direct delivery to your jobsite.",
      brands: ["PBS Direct"],
    },
    fixtures: {
      description:
        "We source sanitaryware, plumbing fixtures, lighting, electrical wires, and gas & water accessories at lower prices than your current supplier.",
      brands: ["PBS Direct"],
    },
    building: {
      description:
        "Our building materials line includes WPC walls, ceilings, fencing, siding & cladding, SPC/LVP flooring, and more — everything you need from foundation to finish.",
      brands: ["PBS Direct"],
    },
  },

  pricing: [
    {
      name: "Pro",
      price: "$3,999",
      turnaround: "7-10 days",
      features: [
        "Standard material selection",
        "Basic appliance package",
        "Professional installation",
        "Project coordination",
        "Quality assurance inspection",
      ],
    },
    {
      name: "Premium",
      price: "$6,599",
      turnaround: "10-14 days",
      features: [
        "Premium material selection",
        "Upgraded appliance package",
        "Dedicated project manager",
        "Design consultation",
      ],
    },
    {
      name: "Elite (Most Popular)",
      price: "$13,999",
      turnaround: "14-21 days",
      features: [
        "Top-tier materials",
        "Premium appliances",
        "Full-scale renovation",
        "Dedicated project team",
        "Custom finishes",
        "Priority scheduling",
      ],
    },
    {
      name: "Custom",
      price: "Custom pricing",
      turnaround: "Varies",
      features: [
        "Fully customized scope",
        "Bespoke material selection",
        "End-to-end management",
      ],
    },
  ],

  tanclub: {
    tiers: [
      {
        name: "PBS Club Member",
        volume: "Under $10K",
        cashback: "2%",
        priceProtection: "7 days",
        support: "Standard",
      },
      {
        name: "PBS Club Gold",
        volume: "Above $10K",
        cashback: "3%",
        priceProtection: "10 days",
        support: "24/7 dedicated account exec",
      },
      {
        name: "PBS Club Platinum",
        volume: "Above $100K",
        cashback: "5%",
        priceProtection: "14 days",
        support: "24/7 dedicated account exec + Net 30 terms",
      },
    ],
    description:
      "PBS Club is our loyalty program. You earn PBScash on every order — 2% to 5% cashback depending on your tier. Gold and Platinum members get free samples, split payments, and priority support.",
  },

  faq: [
    {
      q: "What is PBS Supply Co.?",
      a: "PBS Supply Co. is a professional marketplace for fabricators, contractors, builders, and designers to source quartz, natural stone, porcelain slabs, tiles, flooring, appliances, and more — all at competitive trade pricing.",
    },
    {
      q: "What surfaces can I buy?",
      a: "You can purchase quartz slabs, natural stone, porcelain surfaces, tiles, vinyl, hardwood, and laminate flooring for kitchens, bathrooms, and commercial projects.",
    },
    {
      q: "How does PBS Supply Co. help fabricators?",
      a: "We provide wholesale pricing, reliable delivery, PBScash rewards, and access to top brands and distributors — all in one marketplace.",
    },
    {
      q: "Do you ship nationwide?",
      a: "Yes! We ship nationwide using local routing from the nearest partner warehouse for faster, more reliable delivery.",
    },
    {
      q: "Why are your prices so low?",
      a: "We partner directly with vendors and distributors, eliminating middleman markups and passing the savings on to you.",
    },
    {
      q: "Do you sell to homeowners?",
      a: "Yes, but stone slabs must be received through a certified fabricator. Our team can connect you with one.",
    },
  ],

  company: {
    phone: "(713) 927-1500",
    about:
      "PBS Supply Co. is America's #1 building supply source for large and small builders. We offer lower prices than your current supplier — guaranteed — with direct trucking to your jobsite.",
    stats: {
      products: "300,000+",
      suppliers: "500+",
      responseTime: "Under 3 seconds",
    },
  },
};

// ── Intent Detection ────────────────────────────────────────────

type Intent =
  | "greeting"
  | "product_slabs"
  | "product_tiles"
  | "product_flooring"
  | "product_cabinets"
  | "product_fixtures"
  | "product_building"
  | "product_general"
  | "pricing"
  | "quote"
  | "pbsclub"
  | "shipping"
  | "faq"
  | "brand"
  | "about"
  | "general";

function detectIntent(message: string): Intent {
  const m = message.toLowerCase();

  if (/^(hi|hello|hey|good morning|good afternoon|howdy|sup)\b/.test(m))
    return "greeting";

  if (
    /\b(quote|buy|purchase|order|ready to|get started|sign me up|interested in buying)\b/.test(
      m
    )
  )
    return "quote";

  if (/\b(pric|cost|how much|budget|afford|package|tier|plan)\b/.test(m))
    return "pricing";

  if (
    /\b(pbsclub|pbs club|pbscash|cashback|membership|loyalty|reward)\b/.test(m)
  )
    return "pbsclub";

  if (/\b(slab|quartz|quartzite|marble|granite|stone|countertop)\b/.test(m))
    return "product_slabs";
  if (/\b(tile|porcelain|ceramic|mosaic|backsplash)\b/.test(m))
    return "product_tiles";
  if (/\b(floor|hardwood|vinyl|laminate|wood|spc|lvp|lvt)\b/.test(m))
    return "product_flooring";
  if (/\b(cabinet|kitchen cabinet|bathroom cabinet|vanit)\b/.test(m))
    return "product_cabinets";
  if (/\b(fixture|faucet|plumbing|sanitaryware|toilet|sink|lighting|electrical|wire)\b/.test(m))
    return "product_fixtures";
  if (/\b(fencing|siding|cladding|ceiling|wpc|wall panel|turf)\b/.test(m))
    return "product_building";

  if (
    /\b(msi|caesarstone|cambria|silestone|daltile|dekton|cosentino|kohler|moen|whirlpool|lg|ge |general electric)\b/.test(
      m
    )
  )
    return "brand";

  if (/\b(ship|deliver|lead time|how long|when.*arrive)\b/.test(m))
    return "shipping";

  if (/\b(about|who are you|what is pbs|pbs supply|company|team)\b/.test(m))
    return "about";

  if (
    /\b(product|material|surface|selection|catalog|collection|what.*sell|what.*offer)\b/.test(
      m
    )
  )
    return "product_general";

  if (/\b(how|what|why|can|do you)\b/.test(m)) return "faq";

  return "general";
}

function hasQuoteIntent(message: string): boolean {
  const m = message.toLowerCase();
  return /\b(quote|buy|purchase|order|ready|need.*for my|project|renovation|remodel|get started)\b/.test(
    m
  );
}

// ── Response Generator ──────────────────────────────────────────

function generateResponse(
  intent: Intent,
  message: string,
  messageCount: number
): string {
  switch (intent) {
    case "greeting":
      return `Welcome to PBS Supply Co.! I'm your AI Sourcing Agent — here to help you find the right building materials at the best prices.\n\nI can help you with:\n• **Product search** — slabs, tiles, flooring, cabinets, fixtures & more\n• **Pricing** — lower prices than your current supplier, guaranteed\n• **PBS Club** — earn PBScash rewards on every order\n• **Quotes** — get a quote with direct trucking to your jobsite\n\nWhat are you looking for today?`;

    case "product_slabs": {
      const info = KB.products.slabs;
      return `Great choice! Here's what we have in **slabs**:\n\n${info.description}\n\n**Top brands:** ${info.brands.join(", ")}\n\nPopular picks right now:\n• Taj Mahal Quartzite — warm gold veining, #1 requested\n• Calacatta Quartz — marble look, zero maintenance\n• Silestone — engineered quartz, wide color range\n\nWould you like pricing on a specific material, or shall I help you find the right slab for your project?`;
    }

    case "product_tiles": {
      const info = KB.products.tiles;
      return `Here's our **tile** selection:\n\n${info.description}\n\n**Brands we carry:** ${info.brands.join(", ")}\n\nWe have options for every application — from large-format porcelain for modern spaces to classic mosaics for backsplashes.\n\nWhat's the application? Kitchen, bathroom, or commercial?`;
    }

    case "product_flooring": {
      const info = KB.products.flooring;
      return `Here's what we offer in **flooring**:\n\n${info.description}\n\n**Brands:** ${info.brands.join(", ")}\n\nWhether you need engineered hardwood for a residential remodel or durable vinyl for a multifamily project, we've got you covered at wholesale pricing.\n\nWhat type of space is this for?`;
    }

    case "product_cabinets": {
      const info = KB.products.cabinets;
      return `Here's what we offer in **cabinets**:\n\n${info.description}\n\nWe carry kitchen cabinets, bathroom vanities, and storage solutions — all at prices lower than your current supplier.\n\nWhat type of cabinets are you looking for? Kitchen, bath, or custom?`;
    }

    case "product_fixtures": {
      const info = KB.products.fixtures;
      return `Here's our **fixtures & systems** lineup:\n\n${info.description}\n\nFrom toilets and sinks to electrical wiring and gas accessories — we source it all with direct trucking to your jobsite.\n\nWhat fixtures do you need for your project?`;
    }

    case "product_building": {
      const info = KB.products.building;
      return `Here's our **building materials** selection:\n\n${info.description}\n\nWPC walls, ceilings, fencing, siding & cladding — everything for the exterior and interior structure of your project.\n\nWhat building materials are you looking for?`;
    }

    case "product_general":
      return `PBS Supply Co. offers a full range of building supplies:\n\n• **Slabs** — quartz, natural stone, porcelain\n• **Tiles** — porcelain, ceramic, mosaic\n• **Flooring** — SPC/LVP, hardwood, vinyl, laminate\n• **Cabinets** — kitchen, bathroom, custom\n• **Fixtures** — sanitaryware, plumbing, lighting, electrical\n• **Building Materials** — WPC walls, ceilings, fencing, siding\n• **And more** — if you need it, we can source it!\n\nAll at **lower prices than your current supplier** with direct trucking to your jobsite. Which category interests you?`;

    case "pricing":
      return `Here are our **renovation packages**:\n\n${KB.pricing
        .map(
          (p) =>
            `**${p.name}** — ${p.price}\n  Turnaround: ${p.turnaround}\n  Key features: ${p.features.slice(0, 3).join(", ")}`
        )
        .join(
          "\n\n"
        )}\n\nFor individual materials, we offer wholesale trade pricing — typically 20-40% below retail. Want a quote for a specific project?`;

    case "quote":
      return `I'd love to help you get a quote!\n\nTo connect you with our sourcing team for **personalized pricing**, I just need a few details. This takes less than 30 seconds.\n\nCould you share your **name** to get started?`;

    case "pbsclub":
      return `**PBS Club** is our loyalty program with real savings:\n\n${KB.tanclub.tiers
        .map(
          (t) =>
            `**${t.name}** (${t.volume})\n  • ${t.cashback} PBScash cashback\n  • ${t.priceProtection} price protection\n  • ${t.support}`
        )
        .join(
          "\n\n"
        )}\n\nPlus, Gold & Platinum members get free samples, split payments, and priority quote handling.\n\nWant to join PBS Club? It's free to start!`;

    case "shipping":
      return `**Shipping & Delivery:**\n\n• We ship **nationwide** across the US\n• Local routing from the nearest partner warehouse\n• Typical lead times: 3-10 business days depending on material\n• Coordinated delivery for multi-material orders\n• Special handling for slab deliveries\n\nNeed a delivery timeline for a specific project?`;

    case "brand": {
      const m = message.toLowerCase();
      const allBrands = [
        ...KB.products.slabs.brands,
        ...KB.products.tiles.brands,
        ...KB.products.flooring.brands,
      ];
      const matched = allBrands.filter((b) => m.includes(b.toLowerCase()));
      if (matched.length > 0) {
        return `Yes, we carry **${matched.join(", ")}**! We're an authorized trade partner, so you get wholesale pricing on their full product lines.\n\nWant me to help you find specific products from ${matched[0]}, or get a quote?`;
      }
      return `We partner with 500+ suppliers including MSI, Caesarstone, Cambria, Silestone, Daltile, Kohler, Moen, LG, Whirlpool, and many more.\n\nWhich brand are you interested in?`;
    }

    case "about":
      return `**About PBS Supply Co.:**\n\n${KB.company.about}\n\n**By the numbers:**\n• ${KB.company.stats.products} products indexed\n• ${KB.company.stats.suppliers} supplier network\n• ${KB.company.stats.responseTime} average quote response\n\n**Contact:** ${KB.company.phone}\n\nHow can we help with your project?`;

    case "faq": {
      const m = message.toLowerCase();
      const match = KB.faq.find(
        (f) =>
          m.includes(f.q.toLowerCase().slice(0, 20)) ||
          f.q
            .toLowerCase()
            .split(" ")
            .filter((w) => w.length > 3)
            .some((w) => m.includes(w))
      );
      if (match) {
        return `${match.a}\n\nAnything else I can help with?`;
      }
      return `Great question! Here's what I can tell you:\n\nPBS Supply Co. is a professional marketplace for construction materials — slabs, tiles, flooring, and appliances — all at wholesale pricing.\n\nWe serve fabricators, contractors, builders, and designers nationwide. You can earn cashback through PBS Club and get quotes in seconds.\n\nWant to know more about a specific topic?`;
    }

    default:
      if (messageCount >= 3) {
        return `I appreciate your interest! To make sure I give you the most relevant information, would you like me to:\n\n• **Search products** — find specific materials\n• **Get pricing** — see our packages and trade pricing\n• **Get a quote** — connect with our sourcing team\n\nOr if you'd prefer, I can connect you directly with our team at **${KB.company.phone}**.`;
      }
      return `Thanks for reaching out! I'm here to help you source construction materials at wholesale pricing.\n\nI can assist with:\n• Finding specific products (slabs, tiles, flooring, appliances)\n• Pricing and quotes\n• PBS Club membership benefits\n• Shipping and delivery info\n\nWhat would you like to know?`;
  }
}

// ── Types ───────────────────────────────────────────────────────

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface LeadData {
  name: string;
  email: string;
  phone: string;
}

type LeadStep = "idle" | "name" | "email" | "phone" | "submitted";

// ── Webhook Submission ──────────────────────────────────────────

async function submitLead(
  lead: LeadData,
  chatHistory: ChatMessage[]
): Promise<boolean> {
  const payload = {
    ...lead,
    source: "ai-assistant",
    capturedAt: new Date().toISOString(),
    chatSummary: chatHistory
      .slice(-10)
      .map((m) => `${m.role}: ${m.content.slice(0, 200)}`)
      .join("\n"),
  };

  console.log("Lead captured:", payload);

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    console.log("Webhook not available — lead logged to console");
    return false;
  }
}

// ── Suggestion Chips ────────────────────────────────────────────

const suggestionChips = [
  "I need cabinets for 20 units",
  "SPC flooring pricing for multifamily",
  "Source fencing materials for my project",
];

// ── Mock Conversations ─────────────────────────────────────────

interface MockChat {
  id: string;
  title: string;
  messages: ChatMessage[];
}

const mockChats: MockChat[] = [
  {
    id: "chat-1",
    title: "Calacatta Laza quote — 55 sq ft",
    messages: [
      {
        id: "c1-1",
        role: "user",
        content: "Hi, I'm a fabricator in Austin. I have a client who wants quartz countertops for a full kitchen remodel — about 45 sq ft with a waterfall island edge. What do you recommend?",
        timestamp: new Date(Date.now() - 600000),
      },
      {
        id: "c1-2",
        role: "assistant",
        content: `Great project! For a 45 sq ft kitchen with a waterfall island, here are my top recommendations:\n\n**Premium Picks:**\n• **Calacatta Laza (MSI)** — Warm white base with dramatic gold veining. Perfect for waterfall edges where the vein pattern continues down the side. Very popular in Austin right now.\n• **Taj Mahal Quartzite** — Natural stone with a soft gold tone. The #1 most-requested surface this quarter. Stunning on waterfall islands.\n• **Brittanicca Warm (Cambria)** — Rich warm veining on white, zero maintenance. Lifetime warranty.\n\n**Great Value Options:**\n• **Calacatta Verona (Silestone)** — Marble-look quartz at a mid-range price point. HybriQ+ technology for superior stain resistance.\n• **Empira White (Caesarstone)** — Clean white with subtle veining. Budget-friendly without sacrificing quality.\n\nFor 45 sq ft + waterfall edge, you'll want approximately **55-60 sq ft of material** to account for cuts and waste.\n\nWould you like pricing on any of these? I can also check current inventory at our Texas warehouse.`,
        timestamp: new Date(Date.now() - 540000),
      },
      {
        id: "c1-3",
        role: "user",
        content: "The client likes the marble look but wants zero maintenance. How does Calacatta Laza compare to Brittanicca Warm? And what's the price difference?",
        timestamp: new Date(Date.now() - 480000),
      },
      {
        id: "c1-4",
        role: "assistant",
        content: `Great question — both are excellent choices for a marble-look with zero maintenance. Here's a side-by-side:\n\n**Calacatta Laza (MSI)**\n• Material: Engineered quartz\n• Look: Warm white with bold gold/gray veining\n• Finish: Polished\n• Thickness: 2cm and 3cm available\n• Maintenance: Non-porous, no sealing required\n• Price range: $$$ (mid-premium)\n• Best for: Clients who want dramatic veining on a budget\n\n**Brittanicca Warm (Cambria)**\n• Material: Natural quartz surface\n• Look: Warm white with rich brown and gold veins\n• Finish: High Gloss or Matte\n• Thickness: 2cm and 3cm available\n• Maintenance: Non-porous, lifetime warranty from Cambria\n• Price range: $$$$ (premium)\n• Best for: Clients who want the highest quality + warranty\n\n**Price difference:** Brittanicca Warm typically runs **15-25% higher** than Calacatta Laza. For your 55 sq ft project, that could mean a difference of **$800-$1,200** in material cost.\n\n**My recommendation:** If your client prioritizes vein pattern on the waterfall edge, go with **Calacatta Laza** — MSI's bookmatching is excellent. If they want the lifetime warranty and name-brand confidence, **Brittanicca Warm** is worth the premium.\n\nWant me to pull live pricing for both?`,
        timestamp: new Date(Date.now() - 420000),
      },
      {
        id: "c1-5",
        role: "user",
        content: "Let's go with Calacatta Laza. Can you check inventory in Texas and get me a quote for 55 sq ft in 3cm polished?",
        timestamp: new Date(Date.now() - 360000),
      },
      {
        id: "c1-6",
        role: "assistant",
        content: `Excellent choice! Here's what I found for **Calacatta Laza (MSI) — 3cm Polished**:\n\n**Inventory Status:**\n• Dallas warehouse: 12 slabs in stock\n• Houston warehouse: 8 slabs in stock\n• Average slab size: ~52 sq ft\n• You'll need 2 slabs for 55 sq ft (with bookmatching for the waterfall)\n\n**Estimated Pricing:**\n• Trade price: Competitive wholesale pricing available for PBS Club members\n• Includes: Material only (fabrication quoted separately)\n• Delivery to Austin: Available within 3-5 business days from Dallas\n\n**PBS Club Savings:**\n• As a member, you'd earn **2-5% PBScash** on this order\n• Gold members get **10-day price lock** so your quote holds\n\nTo get your **exact personalized pricing**, I just need a few details so our sourcing team can prepare a formal quote. This takes less than 30 seconds.\n\nCould you share your **name** to get started?`,
        timestamp: new Date(Date.now() - 300000),
      },
      {
        id: "c1-7",
        role: "user",
        content: "Marcus Rivera",
        timestamp: new Date(Date.now() - 240000),
      },
      {
        id: "c1-8",
        role: "assistant",
        content: "Thanks, Marcus! What's the best **email** to reach you at?",
        timestamp: new Date(Date.now() - 200000),
      },
      {
        id: "c1-9",
        role: "user",
        content: "marcus@riverastoneworks.com",
        timestamp: new Date(Date.now() - 160000),
      },
      {
        id: "c1-10",
        role: "assistant",
        content: "And your **phone number**? This helps our team reach you faster for time-sensitive quotes.",
        timestamp: new Date(Date.now() - 120000),
      },
      {
        id: "c1-11",
        role: "user",
        content: "(512) 555-0147",
        timestamp: new Date(Date.now() - 80000),
      },
      {
        id: "c1-12",
        role: "assistant",
        content: `You're all set, Marcus!\n\nHere's a summary of your quote request:\n\n**Material:** Calacatta Laza (MSI) — 3cm Polished\n**Quantity:** 55 sq ft (2 slabs, bookmatched)\n**Application:** Kitchen countertops + waterfall island edge\n**Delivery:** Austin, TX\n**Source:** Dallas warehouse (3-5 business day delivery)\n\nOur sourcing team will reach out within **1 business hour** with your personalized pricing. They'll also confirm slab availability and can arrange a virtual slab viewing if you'd like to approve the exact pieces before ordering.\n\nIn the meantime, you can also call us directly: **(713) 927-1500**\n\nIs there anything else I can help you with?`,
        timestamp: new Date(Date.now() - 40000),
      },
    ],
  },
  {
    id: "chat-2",
    title: "LVT flooring for multifamily units",
    messages: [
      {
        id: "c2-1",
        role: "user",
        content: "We're renovating 48 apartment units in a Class B complex in Phoenix. Need LVT flooring — something durable enough for rentals but looks high-end. Budget is under $2.50/sq ft for material. Each unit is about 750 sq ft.",
        timestamp: new Date(Date.now() - 7200000),
      },
      {
        id: "c2-2",
        role: "assistant",
        content: `That's a solid project — 48 units × 750 sq ft = roughly **36,000 sq ft of LVT**. At that volume, you'll qualify for our best multifamily pricing. Here are my recommendations:\n\n**Best Value — Under $2.00/sq ft:**\n• **Mccarran Bembridge (MSI)** — 7x48 plank, 20mil wear layer, attached pad. Light oak tone that photographs well for listings. Our #1 seller for multifamily.\n• **Ladson Whitmore** — 7.13x48 plank, 20mil wear layer. Cool gray-beige that hides dirt well in high-traffic units.\n\n**Mid-Range — $2.00-$2.50/sq ft:**\n• **Mccarran Brunley** — 9x60 wide plank, 30mil wear layer. Wider format looks premium — great for lease-up marketing photos.\n• **Amalfi Corso** — 7x48, 28mil wear layer. Warm walnut tone with realistic wood grain texture.\n\n**For 48 units, I'd recommend Mccarran Bembridge:**\n• Excellent durability for tenant turnover (20mil is standard for Class B)\n• Attached pad saves labor cost on install\n• Consistent colorway across large orders (no batch variation issues)\n• We can source from our Phoenix-area warehouse for local delivery\n\n**Volume estimate:**\n• 36,000 sq ft + 10% waste = ~39,600 sq ft\n• At trade pricing, you're looking at significant savings vs. retail\n\nWould you like me to pull exact pricing for your volume? I can also check if we can stage deliveries in batches as your crews move through the units.`,
        timestamp: new Date(Date.now() - 7140000),
      },
      {
        id: "c2-3",
        role: "user",
        content: "Bembridge sounds right. A few questions: 1) Can you do phased delivery — 12 units at a time over 4 months? 2) What's the warranty on that product? 3) Do you have matching transition strips and baseboards?",
        timestamp: new Date(Date.now() - 7080000),
      },
      {
        id: "c2-4",
        role: "assistant",
        content: `Great questions — let me address each one:\n\n**1. Phased Delivery — Yes, absolutely.**\nWe do this regularly for multifamily projects. Here's how it works:\n• We lock in your pricing for the full 39,600 sq ft today\n• Schedule 4 deliveries of ~9,900 sq ft each\n• You tell us the delivery dates (typically 2-3 days notice)\n• All material comes from the same production lot for color consistency\n• No storage fees — we hold inventory at our warehouse until you need it\n\n**2. Warranty:**\n• **Residential:** Lifetime limited warranty (for individual unit use)\n• **Commercial/Multifamily:** 10-year wear warranty\n• **Wear layer:** 20mil — rated for moderate commercial traffic\n• MSI will honor warranty claims through PBS Supply Co. directly\n\n**3. Matching Accessories — Yes:**\n• **T-molding transition strips** — Color-matched to Bembridge, $3.49/ft trade\n• **Reducer strips** — For doorway transitions to carpet or tile, $3.49/ft\n• **Quarter round / shoe molding** — Color-matched, $1.89/ft\n• **Baseboards** — We carry 3.5" and 4.5" MDF baseboards in white (most multifamily projects paint these to match)\n\n**Pro tip for 48 units:** Order transition strips and quarter round at the same time as flooring. We'll bundle them into each phased delivery so your crew has everything they need on-site.\n\n**Estimated accessories per unit:**\n• 2-3 transition strips (~$25/unit)\n• 120 LF quarter round (~$225/unit)\n• Total accessories: ~$12,000 for all 48 units\n\nWant me to put together a full quote with flooring + accessories + phased delivery schedule?`,
        timestamp: new Date(Date.now() - 7020000),
      },
      {
        id: "c2-5",
        role: "user",
        content: "Yes, put together the full quote. Also, do you offer any discount for the full project commitment upfront?",
        timestamp: new Date(Date.now() - 6960000),
      },
      {
        id: "c2-6",
        role: "assistant",
        content: `Absolutely — committing to the full 48 units upfront unlocks our best multifamily pricing. Here's what I can offer:\n\n**Volume Discount Structure:**\n• 10,000-25,000 sq ft: Standard trade pricing\n• 25,000-50,000 sq ft: **Additional 8% off** trade pricing\n• 50,000+ sq ft: **Additional 12% off** trade pricing\n\nYour project at ~39,600 sq ft falls in the **8% additional discount** tier.\n\n**Preliminary Quote Summary:**\n\n| Item | Qty | Unit Price | Total |\n|------|-----|-----------|-------|\n| Mccarran Bembridge LVT | 39,600 sq ft | Trade pricing | Quoted separately |\n| T-molding transitions | 144 pcs | $3.49/ft | ~$2,500 |\n| Quarter round molding | 5,760 LF | $1.89/ft | ~$10,900 |\n| Reducer strips | 96 pcs | $3.49/ft | ~$1,680 |\n\n**Plus:**\n• 8% volume discount applied to all materials\n• Free delivery within Phoenix metro (4 phased drops)\n• Price lock for 60 days on the full order\n• Dedicated account manager for your project\n\n**PBS Club Bonus:**\n• You'll earn **PBScash** on this entire order — at Gold tier (3%), that's a significant credit toward your next project\n\nTo finalize exact pricing, let me connect you with our multifamily sourcing team. They'll have your formal quote ready within 2 hours.\n\nCould you share your **name** to get started?`,
        timestamp: new Date(Date.now() - 6900000),
      },
      {
        id: "c2-7",
        role: "user",
        content: "David Chen",
        timestamp: new Date(Date.now() - 6840000),
      },
      {
        id: "c2-8",
        role: "assistant",
        content: "Thanks, David! What's the best **email** to reach you at?",
        timestamp: new Date(Date.now() - 6800000),
      },
      {
        id: "c2-9",
        role: "user",
        content: "david@sunbeltpropertygroup.com",
        timestamp: new Date(Date.now() - 6760000),
      },
      {
        id: "c2-10",
        role: "assistant",
        content: "And your **phone number**? This helps our multifamily team reach you faster.",
        timestamp: new Date(Date.now() - 6720000),
      },
      {
        id: "c2-11",
        role: "user",
        content: "(602) 555-0283",
        timestamp: new Date(Date.now() - 6680000),
      },
      {
        id: "c2-12",
        role: "assistant",
        content: `Perfect, David! Here's your quote request summary:\n\n**Project:** 48-unit Class B renovation — Phoenix, AZ\n**Material:** Mccarran Bembridge LVT (MSI) — 39,600 sq ft\n**Accessories:** Transitions, quarter round, reducers\n**Delivery:** 4 phased deliveries over 4 months\n**Discount:** 8% volume discount (25K-50K tier)\n\nOur multifamily sourcing team will have your formal quote ready within **2 hours**. They'll also include:\n• Phased delivery schedule template\n• Sample request (if you need client/owner approval)\n• PBS Club enrollment details for your PBScash rewards\n\nDirect line: **(713) 927-1500** — ask for the multifamily desk.\n\nAnything else I can help with?`,
        timestamp: new Date(Date.now() - 6640000),
      },
    ],
  },
  {
    id: "chat-3",
    title: "Taj Mahal quartzite availability",
    messages: [
      {
        id: "c3-1",
        role: "user",
        content: "I need Taj Mahal quartzite for a high-end residential project in Bel Air. Client wants bookmatched slabs for a 12-foot island. What do you have available?",
        timestamp: new Date(Date.now() - 86400000),
      },
      {
        id: "c3-2",
        role: "assistant",
        content: `Taj Mahal quartzite for a Bel Air project — beautiful choice. It's our **#1 most-requested natural stone** this quarter. Here's what I can tell you:\n\n**About Taj Mahal Quartzite:**\n• Origin: Brazil\n• Color: Soft white/cream base with warm gold and caramel veining\n• Finish: Polished (most common) or Leathered (trending)\n• Hardness: 7 on Mohs scale — harder than granite, very durable\n• Maintenance: Requires sealing every 12-18 months\n\n**For a 12-foot bookmatched island:**\n• You'll need 2 consecutive slabs from the same block\n• Typical slab size: 120" x 72" (some bundles go up to 130" x 78")\n• For a 12-foot island, you'll want slabs at least 144" long — or we can do a seam at center with bookmatched veining\n• Estimated material: 70-80 sq ft (including waterfall edges if applicable)\n\n**Current Availability:**\n• Los Angeles warehouse: 6 bundles in stock (12 slabs)\n• We can arrange an **in-person slab viewing** at our LA partner yard\n• Each bundle has 2 consecutive slabs ideal for bookmatching\n• Slab thickness: 2cm and 3cm available\n\n**Important for Bel Air projects:**\n• We recommend 3cm for islands — better edge profile options\n• Leathered finish is trending in luxury homes right now — gives it a softer, more organic feel\n• For bookmatching, your fabricator should template first, then we select slabs that align\n\nWould you like to schedule a slab viewing? I can also send you photos of the current bundles we have in stock.`,
        timestamp: new Date(Date.now() - 86340000),
      },
      {
        id: "c3-3",
        role: "user",
        content: "Yes, the client wants leathered finish. Can you send photos of the available bundles? And what's the price range for Taj Mahal in 3cm leathered?",
        timestamp: new Date(Date.now() - 86280000),
      },
      {
        id: "c3-4",
        role: "assistant",
        content: `Great taste — leathered Taj Mahal is absolutely stunning. Here's the pricing context:\n\n**Taj Mahal Quartzite — 3cm Leathered:**\n• Retail price range: $85-$120/sq ft (installed)\n• PBS Supply Co. trade price: **Significantly below retail** — exact pricing depends on slab selection and volume\n• For 70-80 sq ft, you're looking at a material investment in the premium tier\n\n**What affects pricing:**\n• Slab size and quality grade (A, B, or Premium)\n• Vein pattern consistency (bookmatched pairs command a premium)\n• Current market availability (Taj Mahal has been in high demand)\n• Leathered finish adds ~10-15% vs. polished (more processing at the quarry)\n\n**Photos & Viewing:**\nI can have our LA team photograph the current bundles and send them to you within a few hours. Each photo set will include:\n• Full slab overview (both slabs in the pair)\n• Close-up of veining detail\n• Color reference with calibration card\n• Slab dimensions and thickness verification\n\n**For a Bel Air luxury project, I'd also recommend:**\n• Visit our partner slab yard in person — photos don't fully capture the depth of Taj Mahal's veining\n• Bring your client if possible — slab selection for a bookmatched island is a great client experience\n• We can hold slabs for 7 days while you coordinate the visit (14 days for PBS Club Gold)\n\nWant me to set up the slab viewing and get you exact pricing? I'll need your contact info to coordinate with our LA sourcing team.`,
        timestamp: new Date(Date.now() - 86220000),
      },
      {
        id: "c3-5",
        role: "user",
        content: "Let's do the in-person viewing. My client is available Thursday or Friday this week. Can you also check if you have matching Taj Mahal for the perimeter counters? That's another 35 sq ft.",
        timestamp: new Date(Date.now() - 86160000),
      },
      {
        id: "c3-6",
        role: "assistant",
        content: `Perfect — I'll coordinate both the viewing and the additional material. Here's the full scope:\n\n**Updated Project Requirements:**\n• Island: 70-80 sq ft, bookmatched, 3cm leathered\n• Perimeter counters: 35 sq ft, 3cm leathered (same Taj Mahal)\n• **Total material needed: ~115-125 sq ft** (with waste factor)\n• That's approximately **4-5 slabs** from the same block for color consistency\n\n**Slab Viewing — This Week:**\n• Location: Our partner yard in downtown LA (20 min from Bel Air)\n• Thursday or Friday — I'll confirm exact availability with the yard\n• Duration: ~30-45 minutes\n• Your client is welcome to attend\n• We'll have the bundles pulled and staged for easy viewing\n\n**Matching Guarantee:**\nFor island + perimeter from the same stone, we'll select all slabs from one block. This ensures:\n• Consistent color tone across kitchen\n• Similar veining intensity\n• Even surface texture (important for leathered finish)\n\n**Next Steps:**\n1. I'll reserve 3 bundles (6 slabs) from the same block\n2. Our LA team will photograph and send previews today\n3. We'll schedule Thursday or Friday based on yard availability\n4. After viewing, your fabricator can template and we'll cut to order\n\nLet me grab your details to coordinate the viewing. What's your **name**?`,
        timestamp: new Date(Date.now() - 86100000),
      },
      {
        id: "c3-7",
        role: "user",
        content: "Elena Vasquez, V&V Stone Design",
        timestamp: new Date(Date.now() - 86040000),
      },
      {
        id: "c3-8",
        role: "assistant",
        content: "Hi Elena! What's the best **email** for scheduling the viewing and sending slab photos?",
        timestamp: new Date(Date.now() - 86000000),
      },
      {
        id: "c3-9",
        role: "user",
        content: "elena@vvstonedesign.com",
        timestamp: new Date(Date.now() - 85960000),
      },
      {
        id: "c3-10",
        role: "assistant",
        content: "And your **phone number**? Our LA team may call to confirm the viewing time.",
        timestamp: new Date(Date.now() - 85920000),
      },
      {
        id: "c3-11",
        role: "user",
        content: "(310) 555-0891",
        timestamp: new Date(Date.now() - 85880000),
      },
      {
        id: "c3-12",
        role: "assistant",
        content: `You're all set, Elena!\n\n**Viewing Request Summary:**\n• **Stone:** Taj Mahal Quartzite — 3cm Leathered\n• **Total:** ~120 sq ft (bookmatched island + perimeter counters)\n• **Location:** PBS Supply Co. partner yard, Los Angeles\n• **Preferred dates:** Thursday or Friday this week\n• **Contact:** elena@vvstonedesign.com · (310) 555-0891\n\n**What happens next:**\n1. Our LA team will confirm the viewing slot within 2 hours\n2. You'll receive slab photos via email today\n3. We'll have 3 bundles (6 slabs) pulled and staged for your visit\n4. After selection, we can hold your chosen slabs for up to 14 days\n\nDirect line for our LA sourcing desk: **(713) 927-1500**\n\nLooking forward to helping you create something beautiful for this Bel Air project!`,
        timestamp: new Date(Date.now() - 85840000),
      },
    ],
  },
  {
    id: "chat-4",
    title: "Appliance package for 12-unit reno",
    messages: [
      {
        id: "c4-1",
        role: "user",
        content: "I'm renovating a 12-unit apartment building in Denver. Need a full appliance package for each unit — fridge, stove, dishwasher, microwave, washer, dryer. What do you have for mid-range multifamily?",
        timestamp: new Date(Date.now() - 172800000),
      },
      {
        id: "c4-2",
        role: "assistant",
        content: `Great — 12 units with full appliance suites is a solid order. Here's what I recommend for **mid-range multifamily**:\n\n**Option A: GE Package (Best Value)**\n• Refrigerator: GE 18.6 cu ft Top Freezer — stainless, fingerprint resistant\n• Range: GE 30" Free-Standing Gas Range — 4 burners, self-clean\n• Dishwasher: GE 24" Built-In — 3 wash cycles, dry boost\n• Microwave: GE 1.6 cu ft Over-the-Range — venting system included\n• Washer: GE 4.5 cu ft Front Load — Energy Star certified\n• Dryer: GE 7.8 cu ft Electric Dryer — sensor dry technology\n• **Per unit:** Budget-friendly, reliable, strong warranty\n• **Best for:** Class B/C properties, turnover-ready\n\n**Option B: Whirlpool Package (Mid-Premium)**\n• Refrigerator: Whirlpool 21 cu ft Side-by-Side — ice maker, LED lighting\n• Range: Whirlpool 30" Electric Range — 5 elements, convection\n• Dishwasher: Whirlpool 24" — 5 wash cycles, 3rd rack\n• Microwave: Whirlpool 1.7 cu ft Over-the-Range — steam clean\n• Washer: Whirlpool 4.3 cu ft Top Load — deep water wash\n• Dryer: Whirlpool 7.0 cu ft Electric — wrinkle shield\n• **Per unit:** Slightly higher than GE, premium feel\n• **Best for:** Class B+ properties, lease-up positioning\n\n**Option C: LG Package (Premium Multifamily)**\n• Refrigerator: LG 23 cu ft French Door — smart cooling, stainless\n• Range: LG 30" Slide-In Electric — ProBake convection\n• Dishwasher: LG 24" — QuadWash, TrueSteam\n• Microwave: LG 2.0 cu ft Over-the-Range — sensor cook\n• Washer: LG 5.0 cu ft Front Load — TurboWash 360\n• Dryer: LG 7.4 cu ft Electric — TurboSteam\n• **Per unit:** Premium positioning, smart home features\n• **Best for:** Class A properties, competitive markets\n\n**Volume pricing at 12 units:**\nAll three options get **multifamily volume discounts**. The GE package typically comes in **20-30% below retail** at our trade pricing.\n\nWhich option aligns with your project? Or would you like to mix and match components?`,
        timestamp: new Date(Date.now() - 172740000),
      },
      {
        id: "c4-3",
        role: "user",
        content: "Option A for 10 units and Option B for the 2 top-floor premium units. Can you handle delivery and coordination with our GC?",
        timestamp: new Date(Date.now() - 172680000),
      },
      {
        id: "c4-4",
        role: "assistant",
        content: `Smart mix — GE for standard units, Whirlpool upgrade for the premium floors. Here's how we handle delivery and coordination:\n\n**Order Breakdown:**\n• 10x GE Full Appliance Suite (60 pieces)\n• 2x Whirlpool Full Appliance Suite (12 pieces)\n• **Total: 72 appliances**\n\n**Delivery & Coordination:**\n\n**White Glove Service (recommended for multifamily):**\n• Delivery to each unit floor — not just the loading dock\n• Appliances placed in the correct room per your floor plan\n• All packaging removed and disposed of\n• Basic install coordination with your GC's plumber and electrician\n• Delivery scheduled in batches as units are ready\n\n**GC Coordination:**\n• We assign a **dedicated project coordinator** for orders of 10+ units\n• They'll work directly with your GC on:\n  - Delivery scheduling per unit readiness\n  - Rough-in specifications (gas lines, water supply, electrical)\n  - Appliance dimensions for cabinet coordination\n  - Haul-away of old appliances (if applicable)\n• We send spec sheets and install requirements before your framing stage\n\n**Timeline:**\n• GE packages: In stock, ready to ship within 5-7 business days\n• Whirlpool packages: In stock, same timeline\n• Phased delivery available to match your construction schedule\n\n**Warranty & Support:**\n• All manufacturer warranties apply (1-year standard on all appliances)\n• If any unit arrives damaged, we replace within 48 hours\n• Single point of contact for all 72 appliances\n\nWant me to build out the full quote? I'll include the white glove delivery cost and volume pricing for both packages.`,
        timestamp: new Date(Date.now() - 172620000),
      },
      {
        id: "c4-5",
        role: "user",
        content: "Yes, build the full quote with white glove. Also, do you handle haul-away of the old appliances? There are existing units in each apartment.",
        timestamp: new Date(Date.now() - 172560000),
      },
      {
        id: "c4-6",
        role: "assistant",
        content: `Yes, we offer **haul-away service** — here's how it works:\n\n**Old Appliance Haul-Away:**\n• We remove all existing appliances during the delivery\n• Disconnection of gas/electric by your GC's licensed crew (we don't disconnect utilities)\n• Appliances transported to certified recycling facility\n• Recycling certificate provided for your property records\n• Pricing: Per-appliance fee, discounted at 12+ unit volume\n\n**For 12 units × 6 appliances each = 72 appliances hauled away**\n\n**Important Notes:**\n• Refrigerants (fridges, AC units) handled per EPA regulations\n• Washers/dryers must be drained before pickup\n• We need 48-hour notice if haul-away schedule changes\n\n**Updated Quote Will Include:**\n\n| Line Item | Qty | Notes |\n|-----------|-----|-------|\n| GE Full Suite | 10 units | 6 appliances each |\n| Whirlpool Full Suite | 2 units | 6 appliances each |\n| White Glove Delivery | 12 units | Floor-by-floor placement |\n| Old Appliance Haul-Away | 72 pcs | Recycling included |\n| GC Coordination | 1 | Dedicated project coordinator |\n\n**Estimated project savings vs. retail:** 20-30% across all appliances, plus volume discounts on delivery and haul-away.\n\nLet me get your info to build the formal quote. What's your **name**?`,
        timestamp: new Date(Date.now() - 172500000),
      },
      {
        id: "c4-7",
        role: "user",
        content: "James Thornton, Thornton Property Development",
        timestamp: new Date(Date.now() - 172440000),
      },
      {
        id: "c4-8",
        role: "assistant",
        content: "Great, James! What's the best **email** for receiving the quote?",
        timestamp: new Date(Date.now() - 172400000),
      },
      {
        id: "c4-9",
        role: "user",
        content: "james@thorntonpd.com",
        timestamp: new Date(Date.now() - 172360000),
      },
      {
        id: "c4-10",
        role: "assistant",
        content: "And your **phone number**?",
        timestamp: new Date(Date.now() - 172320000),
      },
      {
        id: "c4-11",
        role: "user",
        content: "(720) 555-0462",
        timestamp: new Date(Date.now() - 172280000),
      },
      {
        id: "c4-12",
        role: "assistant",
        content: `All set, James!\n\n**Quote Request Summary:**\n• **Project:** 12-unit apartment renovation — Denver, CO\n• **Standard units (10x):** GE Full Appliance Suite\n• **Premium units (2x):** Whirlpool Full Appliance Suite\n• **Services:** White glove delivery + old appliance haul-away (72 pcs)\n• **Coordination:** Dedicated project coordinator for GC liaison\n• **Contact:** james@thorntonpd.com · (720) 555-0462\n\nOur multifamily appliance team will have your formal quote ready within **3 hours**, including:\n• Itemized pricing for all 72 appliances\n• White glove delivery and haul-away costs\n• Suggested delivery phasing based on your construction timeline\n• Spec sheets for GC coordination\n\nDirect line: **(713) 927-1500** — ask for the appliance desk.\n\nGreat project, James — we'll take care of you!`,
        timestamp: new Date(Date.now() - 172240000),
      },
    ],
  },
  {
    id: "chat-5",
    title: "PBS Club Gold membership benefits",
    messages: [
      {
        id: "c5-1",
        role: "user",
        content: "I've been buying from you guys for a few months now. My total is around $15K. Someone mentioned PBS Club Gold — what exactly do I get with that?",
        timestamp: new Date(Date.now() - 259200000),
      },
      {
        id: "c5-2",
        role: "assistant",
        content: `Great question! At $15K in total orders, you've already qualified for **PBS Club Gold** — and it comes with some serious perks. Here's the full breakdown:\n\n**PBS Club Gold Benefits (Total volume above $10K):**\n\n**Savings & Rewards:**\n• **3% PBScash Cashback** on every order (up from 2% at base tier)\n• **Gold-exclusive discounts** layered on top of wholesale pricing\n• **10-day Price Lock** — your quoted price holds for 10 days (vs. 7 at base)\n\n**Service & Support:**\n• **24/7 Dedicated Account Executive** — a real person who knows your business\n• **Priority quote handling** — your quotes jump to the front of the queue\n• **Same-day quotes** with priority turnaround\n\n**Extras:**\n• **Free samples** — request material samples shipped to you at no cost\n• **50/50 Split Payments** — pay 50% upfront, 50% on delivery\n• **Plans Take Off** — we help estimate material quantities from your blueprints\n\n**What you've earned so far:**\nAt $15K total spend with 3% cashback, you'd have approximately **$450 in PBScash** available for your next order.\n\nWant me to check your exact PBScash balance, or do you have questions about any specific benefit?`,
        timestamp: new Date(Date.now() - 259140000),
      },
      {
        id: "c5-3",
        role: "user",
        content: "The split payment is interesting. So I only pay half upfront? How does that work exactly? And what's the difference between Gold and Platinum?",
        timestamp: new Date(Date.now() - 259080000),
      },
      {
        id: "c5-4",
        role: "assistant",
        content: `Let me break down both:\n\n**Split Payments (Gold & Platinum):**\n• **50% due at order confirmation** — locks in your price and reserves inventory\n• **50% due at delivery/pickup** — you pay the balance when materials arrive\n• No interest, no fees — it's a straightforward 50/50 split\n• Applies to orders over $500\n• Your account exec handles the invoicing\n\n**Why pros love it:**\n• Better cash flow management across multiple projects\n• You're not paying full price until you confirm the materials are right\n• Makes it easier to justify larger orders (e.g., stocking up on popular slabs)\n\n---\n\n**Gold vs. Platinum — Side by Side:**\n\n| Benefit | Gold ($10K+) | Platinum ($100K+) |\n|---------|-------------|-------------------|\n| PBScash Cashback | 3% | **5%** |\n| Price Lock | 10 days | **14 days** |\n| Discounts | Gold tier | **Exclusive Platinum** |\n| Account Support | 24/7 dedicated exec | 24/7 dedicated exec |\n| Split Payments | 50/50 | 50/50 |\n| Free Samples | Yes | Yes |\n| Plans Take Off | Yes | Yes |\n| **Flexible Payment Terms** | No | **Yes — Net 30** |\n\n**The big Platinum unlock is Net 30 terms:**\n• Order today, pay in 30 days\n• No interest charges\n• Ideal for contractors who get paid on project milestones\n• Requires credit approval (our team handles this quickly)\n\n**To reach Platinum:**\nYou're at $15K now — once you hit $100K in total volume, you automatically upgrade. Many of our active fabricators reach Platinum within 12-18 months.\n\nWould you like me to connect you with your Gold account exec? They can walk you through setting up split payments on your next order.`,
        timestamp: new Date(Date.now() - 259020000),
      },
      {
        id: "c5-5",
        role: "user",
        content: "This is great. Yes, I'd like to set up split payments. I also have a big project coming up — about $25K in slabs. Would that push me closer to Platinum?",
        timestamp: new Date(Date.now() - 258960000),
      },
      {
        id: "c5-6",
        role: "assistant",
        content: `Absolutely — let's map it out:\n\n**Your Path to Platinum:**\n• Current total spend: **$15,000**\n• Upcoming project: **+$25,000**\n• New total: **$40,000**\n• Remaining to Platinum: **$60,000**\n\nAt your current pace, you could reach Platinum in **8-12 months**. And here's the exciting part — that $25K slab order at Gold tier earns you:\n\n**PBScash on this order alone:**\n• $25,000 × 3% = **$750 in PBScash**\n• Plus your existing ~$450 balance\n• **Total PBScash available: ~$1,200** toward future orders\n\n**For your $25K slab project with Split Payments:**\n• Pay $12,500 upfront to lock pricing and reserve slabs\n• Pay $12,500 on delivery\n• 10-day price lock while you finalize selections\n• Free samples to confirm colors with your client\n\n**Pro tip:** If you refer other fabricators to PBS Supply Co., referral bonuses can accelerate your volume toward Platinum even faster.\n\nLet me connect you with your Gold account exec to:\n1. Activate split payments on your account\n2. Start quoting the $25K slab project\n3. Set up your PBScash redemption\n\nWhat's your **name**?`,
        timestamp: new Date(Date.now() - 258900000),
      },
      {
        id: "c5-7",
        role: "user",
        content: "Ryan Park, Park Stoneworks",
        timestamp: new Date(Date.now() - 258840000),
      },
      {
        id: "c5-8",
        role: "assistant",
        content: "Hi Ryan! What's the best **email** for your account?",
        timestamp: new Date(Date.now() - 258800000),
      },
      {
        id: "c5-9",
        role: "user",
        content: "ryan@parkstoneworks.com",
        timestamp: new Date(Date.now() - 258760000),
      },
      {
        id: "c5-10",
        role: "assistant",
        content: "And your **phone number**?",
        timestamp: new Date(Date.now() - 258720000),
      },
      {
        id: "c5-11",
        role: "user",
        content: "(213) 555-0734",
        timestamp: new Date(Date.now() - 258680000),
      },
      {
        id: "c5-12",
        role: "assistant",
        content: `You're all set, Ryan!\n\n**Account Setup Summary:**\n• **Member:** Ryan Park — Park Stoneworks\n• **Tier:** PBS Club Gold (total volume: $15K+)\n• **Requests:** Split payment activation + $25K slab project quote\n• **Contact:** ryan@parkstoneworks.com · (213) 555-0734\n\n**Your Gold account exec will reach out within 1 hour to:**\n1. Activate 50/50 split payments on your account\n2. Review your PBScash balance and redemption options\n3. Start building the quote for your $25K slab project\n4. Discuss your path to Platinum tier\n\n**Your PBScash summary:**\n• Current balance: ~$450\n• After $25K order: ~$1,200\n• Annual projection at current pace: ~$3,000+ in cashback\n\nDirect line: **(713) 927-1500**\n\nThanks for being a loyal PBS Club member, Ryan — we're here to help you grow!`,
        timestamp: new Date(Date.now() - 258640000),
      },
    ],
  },
];

// ── Page Component ──────────────────────────────────────────────

export default function AIAssistantPage() {
  const [activeChatId, setActiveChatId] = useState("chat-1");
  const [messages, setMessages] = useState<ChatMessage[]>(mockChats[0].messages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [leadStep, setLeadStep] = useState<LeadStep>("submitted");
  const [leadData, setLeadData] = useState<LeadData>({
    name: "Marcus Rivera",
    email: "marcus@riverastoneworks.com",
    phone: "(512) 555-0147",
  });
  const [messageCount, setMessageCount] = useState(6);
  const [leadCaptured, setLeadCaptured] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const switchChat = useCallback((chatId: string) => {
    const chat = mockChats.find((c) => c.id === chatId);
    if (chat) {
      setActiveChatId(chatId);
      setMessages(chat.messages);
      setLeadStep("submitted");
      setLeadCaptured(true);
      setMessageCount(6);
      setSidebarOpen(false);
    }
  }, []);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addMessage = useCallback(
    (role: "user" | "assistant", content: string) => {
      const msg: ChatMessage = {
        id: `${Date.now()}-${Math.random()}`,
        role,
        content,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, msg]);
      return msg;
    },
    []
  );

  const simulateTyping = useCallback(
    (content: string) => {
      setIsTyping(true);
      const delay = Math.min(500 + content.length * 5, 1500);
      setTimeout(() => {
        addMessage("assistant", content);
        setIsTyping(false);
      }, delay);
    },
    [addMessage]
  );

  const handleLeadCapture = useCallback(
    async (userInput: string) => {
      addMessage("user", userInput);

      if (leadStep === "name") {
        setLeadData((prev) => ({ ...prev, name: userInput }));
        simulateTyping(
          `Thanks, ${userInput}! What's the best **email** to reach you at?`
        );
        setLeadStep("email");
        return;
      }

      if (leadStep === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userInput)) {
          simulateTyping(
            "That doesn't look like a valid email. Could you double-check and try again?"
          );
          return;
        }
        setLeadData((prev) => ({ ...prev, email: userInput }));
        simulateTyping(
          "And your **phone number**? This helps our team reach you faster for time-sensitive quotes."
        );
        setLeadStep("phone");
        return;
      }

      if (leadStep === "phone") {
        const cleaned = userInput.replace(/\D/g, "");
        if (cleaned.length < 10) {
          simulateTyping(
            "Please enter a valid phone number (at least 10 digits)."
          );
          return;
        }
        const finalLead = { ...leadData, phone: userInput };
        setLeadData(finalLead);
        setLeadStep("submitted");
        setLeadCaptured(true);

        setIsTyping(true);
        const currentMessages = [
          ...messages,
          {
            id: "temp",
            role: "user" as const,
            content: userInput,
            timestamp: new Date(),
          },
        ];
        await submitLead(finalLead, currentMessages);
        setIsTyping(false);

        addMessage(
          "assistant",
          `You're all set, ${finalLead.name}!\n\nOur sourcing team will reach out within **1 business hour** with personalized pricing for your project.\n\nIn the meantime, you can also call us directly: **${KB.company.phone}**\n\nIs there anything else I can help you with?`
        );
        return;
      }
    },
    [leadStep, leadData, messages, addMessage, simulateTyping]
  );

  const handleSend = useCallback(
    (overrideMessage?: string) => {
      const userMessage = overrideMessage || input.trim();
      if (!userMessage) return;
      if (!overrideMessage) setInput("");

      if (leadStep !== "idle" && leadStep !== "submitted") {
        handleLeadCapture(userMessage);
        return;
      }

      addMessage("user", userMessage);
      const newCount = messageCount + 1;
      setMessageCount(newCount);

      const intent = detectIntent(userMessage);
      const isQuoteIntent = hasQuoteIntent(userMessage);

      if ((isQuoteIntent || intent === "quote") && !leadCaptured) {
        const response = generateResponse("quote", userMessage, newCount);
        simulateTyping(response);
        setLeadStep("name");
        return;
      }

      if (newCount >= 4 && !leadCaptured && newCount % 3 === 1) {
        const response = generateResponse(intent, userMessage, newCount);
        simulateTyping(
          `${response}\n\n---\n**Want personalized pricing?** I can connect you with our sourcing team — just say "get a quote" anytime.`
        );
        return;
      }

      const response = generateResponse(intent, userMessage, newCount);
      simulateTyping(response);
    },
    [
      input,
      leadStep,
      messageCount,
      leadCaptured,
      addMessage,
      simulateTyping,
      handleLeadCapture,
    ]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setInput("");
    setLeadStep("idle");
    setLeadData({ name: "", email: "", phone: "" });
    setMessageCount(0);
    setLeadCaptured(false);
    setSidebarOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className="flex h-screen bg-white">
      {/* ── Sidebar ── */}

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[200px] bg-white border-r border-gray-200 flex flex-col transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 pt-5 pb-4">
          <Link href="/" className="flex items-center gap-1">
            <img src="/images/logo/pbs-logo.jpeg" alt="PBS Supply Co." className="h-8 w-auto rounded-full" />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 space-y-1">
          <button
            onClick={handleNewChat}
            className="flex items-center gap-2.5 w-full px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            New Chat
          </button>
          <Link
            href="/surfaces"
            className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <FileText className="w-4 h-4" />
            My Quote
          </Link>
          <Link
            href="/surfaces"
            className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Heart className="w-4 h-4" />
            Favorites
          </Link>

          {/* Chats section */}
          <div className="pt-4">
            <p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              Chats
            </p>
            <div className="space-y-0.5">
              {mockChats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => switchChat(chat.id)}
                  className={`flex items-center gap-2 w-full px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer text-left ${
                    activeChatId === chat.id
                      ? "text-gray-800 bg-gray-100 font-medium"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {activeChatId === chat.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-orange flex-shrink-0" />
                  )}
                  <span className="truncate">{chat.title}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Bottom nav */}
        <div className="border-t border-gray-200 px-3 py-3 space-y-0.5">
          <Link
            href="/surfaces"
            className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Shop
          </Link>
          <Link
            href="/about-us"
            className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Info className="w-4 h-4" />
            About Us
          </Link>
          <Link
            href="tel:+17139271500"
            className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </Link>
          <Link
            href="/sign-up"
            className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <UserCircle className="w-4 h-4" />
            Account
          </Link>
        </div>
      </aside>

      {/* ── Main Chat Area ── */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#f9fafb]">
        {/* Mobile header — only visible on small screens */}
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <span className="text-sm font-semibold text-charcoal flex items-center gap-2">
            <img src="/images/logo/pbs-logo.jpeg" alt="PBS" className="h-6 w-auto rounded-full" />
            AI Sourcing Agent
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-md bg-accent-orange flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-white border border-gray-200 text-charcoal rounded-br-md"
                        : "bg-white border border-gray-100 text-gray-800 rounded-bl-md shadow-sm"
                    }`}
                  >
                    {msg.content.split("\n").map((line, i) => (
                      <span key={i}>
                        {line.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
                          part.startsWith("**") && part.endsWith("**") ? (
                            <strong key={j} className="font-semibold text-charcoal">
                              {part.slice(2, -2)}
                            </strong>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )}
                        {i < msg.content.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex"
              >
                <div className="w-7 h-7 rounded-md bg-accent-orange flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0ms]" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:150ms]" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Lead capture success */}
            {leadCaptured && leadStep === "submitted" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex justify-center py-2"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 text-xs rounded-full border border-green-200">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Contact info submitted — our team will reach out soon
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Bottom section: suggestions + input */}
        <div className="flex-shrink-0 border-t border-gray-100 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Suggestion chips */}
            {messages.length === 0 && !isTyping && (
              <div className="flex flex-wrap justify-center gap-2 pt-4 pb-2">
                {suggestionChips.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleSend(chip)}
                    className="px-4 py-2 bg-white border border-gray-200 text-sm text-gray-700 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* Input bar */}
            <div className="flex items-center gap-2 py-4">
              <button
                onClick={handleNewChat}
                className="p-2.5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                title="New chat"
              >
                <Plus className="w-5 h-5" />
              </button>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  leadStep === "name"
                    ? "Enter your name..."
                    : leadStep === "email"
                      ? "Enter your email..."
                      : leadStep === "phone"
                        ? "Enter your phone number..."
                        : "What would you like to know?"
                }
                className="flex-1 bg-transparent text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none border-b border-gray-200 focus:border-accent-orange py-2 transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-charcoal text-white hover:bg-charcoal-light transition-colors disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
