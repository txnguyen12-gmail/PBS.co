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
const WEBHOOK_URL = "https://hooks.tanwinwin.com/lead-capture"; // placeholder
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
    appliances: {
      description:
        "We source premium appliances from General Electric, LG, Whirlpool, Kohler, and Moen — from kitchen suites to plumbing fixtures, all at trade pricing.",
      brands: ["General Electric", "LG", "Whirlpool", "Kohler", "Moen"],
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
        name: "TanClub Member",
        volume: "Under $10K",
        cashback: "2%",
        priceProtection: "7 days",
        support: "Standard",
      },
      {
        name: "TanClub Gold",
        volume: "Above $10K",
        cashback: "3%",
        priceProtection: "10 days",
        support: "24/7 dedicated account exec",
      },
      {
        name: "TanClub Platinum",
        volume: "Above $100K",
        cashback: "5%",
        priceProtection: "14 days",
        support: "24/7 dedicated account exec + Net 30 terms",
      },
    ],
    description:
      "TanClub is our loyalty program. You earn TanCash on every order — 2% to 5% cashback depending on your tier. Gold and Platinum members get free samples, split payments, and priority support.",
  },

  faq: [
    {
      q: "What is TanWinWin?",
      a: "TanWinWin is a professional marketplace for fabricators, contractors, builders, and designers to source quartz, natural stone, porcelain slabs, tiles, flooring, appliances, and more — all at competitive trade pricing.",
    },
    {
      q: "What surfaces can I buy?",
      a: "You can purchase quartz slabs, natural stone, porcelain surfaces, tiles, vinyl, hardwood, and laminate flooring for kitchens, bathrooms, and commercial projects.",
    },
    {
      q: "How does TanWinWin help fabricators?",
      a: "We provide wholesale pricing, reliable delivery, TanCash rewards, and access to top brands and distributors — all in one marketplace.",
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
    phone: "(424) 250-7795",
    about:
      "TanWinWin is a construction materials marketplace trusted by builders like TruAmerica, Tishman Speyer, AvalonBay, and Compass. We work with 500+ suppliers to offer 300,000+ products at wholesale pricing.",
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
  | "product_appliances"
  | "product_general"
  | "pricing"
  | "quote"
  | "tanclub"
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
    /\b(tanclub|tan club|tancash|cashback|membership|loyalty|reward)\b/.test(m)
  )
    return "tanclub";

  if (/\b(slab|quartz|quartzite|marble|granite|stone|countertop)\b/.test(m))
    return "product_slabs";
  if (/\b(tile|porcelain|ceramic|mosaic|backsplash)\b/.test(m))
    return "product_tiles";
  if (/\b(floor|hardwood|vinyl|laminate|wood)\b/.test(m))
    return "product_flooring";
  if (
    /\b(appliance|kitchen suite|washer|dryer|refrigerator|dishwasher|faucet|plumbing|fixture)\b/.test(
      m
    )
  )
    return "product_appliances";

  if (
    /\b(msi|caesarstone|cambria|silestone|daltile|dekton|cosentino|kohler|moen|whirlpool|lg|ge |general electric)\b/.test(
      m
    )
  )
    return "brand";

  if (/\b(ship|deliver|lead time|how long|when.*arrive)\b/.test(m))
    return "shipping";

  if (/\b(about|who are you|what is tanwinwin|company|team)\b/.test(m))
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
      return `Welcome to TanWinWin! I'm here to help you find the right materials for your project.\n\nI can help you with:\n• **Product search** — slabs, tiles, flooring, appliances\n• **Pricing** — our renovation packages and trade pricing\n• **TanClub** — our loyalty program with up to 5% cashback\n• **Quotes** — get a quote for your project\n\nWhat are you looking for today?`;

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

    case "product_appliances": {
      const info = KB.products.appliances;
      return `We source **premium appliances** at trade pricing:\n\n${info.description}\n\n**Brands:** ${info.brands.join(", ")}\n\nFrom full kitchen suites to individual fixtures, we can bundle appliances with your materials order for additional savings.\n\nWhat appliances are you looking for?`;
    }

    case "product_general":
      return `TanWinWin offers a wide range of construction materials:\n\n• **Slabs** — quartz, natural stone, porcelain (${KB.products.slabs.brands.slice(0, 4).join(", ")}...)\n• **Tiles** — porcelain, ceramic, mosaic (${KB.products.tiles.brands.slice(0, 3).join(", ")}...)\n• **Flooring** — hardwood, vinyl, laminate\n• **Appliances** — kitchen, plumbing fixtures (${KB.products.appliances.brands.slice(0, 3).join(", ")}...)\n\nAll at **wholesale trade pricing** with nationwide delivery. Which category interests you?`;

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

    case "tanclub":
      return `**TanClub** is our loyalty program with real savings:\n\n${KB.tanclub.tiers
        .map(
          (t) =>
            `**${t.name}** (${t.volume})\n  • ${t.cashback} TanCash cashback\n  • ${t.priceProtection} price protection\n  • ${t.support}`
        )
        .join(
          "\n\n"
        )}\n\nPlus, Gold & Platinum members get free samples, split payments, and priority quote handling.\n\nWant to join TanClub? It's free to start!`;

    case "shipping":
      return `**Shipping & Delivery:**\n\n• We ship **nationwide** across the US\n• Local routing from the nearest partner warehouse\n• Typical lead times: 3-10 business days depending on material\n• Coordinated delivery for multi-material orders\n• Special handling for slab deliveries\n\nNeed a delivery timeline for a specific project?`;

    case "brand": {
      const m = message.toLowerCase();
      const allBrands = [
        ...KB.products.slabs.brands,
        ...KB.products.tiles.brands,
        ...KB.products.flooring.brands,
        ...KB.products.appliances.brands,
      ];
      const matched = allBrands.filter((b) => m.includes(b.toLowerCase()));
      if (matched.length > 0) {
        return `Yes, we carry **${matched.join(", ")}**! We're an authorized trade partner, so you get wholesale pricing on their full product lines.\n\nWant me to help you find specific products from ${matched[0]}, or get a quote?`;
      }
      return `We partner with 500+ suppliers including MSI, Caesarstone, Cambria, Silestone, Daltile, Kohler, Moen, LG, Whirlpool, and many more.\n\nWhich brand are you interested in?`;
    }

    case "about":
      return `**About TanWinWin:**\n\n${KB.company.about}\n\n**By the numbers:**\n• ${KB.company.stats.products} products indexed\n• ${KB.company.stats.suppliers} supplier network\n• ${KB.company.stats.responseTime} average quote response\n\n**Contact:** ${KB.company.phone}\n\nHow can we help with your project?`;

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
      return `Great question! Here's what I can tell you:\n\nTanWinWin is a professional marketplace for construction materials — slabs, tiles, flooring, and appliances — all at wholesale pricing.\n\nWe serve fabricators, contractors, builders, and designers nationwide. You can earn cashback through TanClub and get quotes in seconds.\n\nWant to know more about a specific topic?`;
    }

    default:
      if (messageCount >= 3) {
        return `I appreciate your interest! To make sure I give you the most relevant information, would you like me to:\n\n• **Search products** — find specific materials\n• **Get pricing** — see our packages and trade pricing\n• **Get a quote** — connect with our sourcing team\n\nOr if you'd prefer, I can connect you directly with our team at **${KB.company.phone}**.`;
      }
      return `Thanks for reaching out! I'm here to help you source construction materials at wholesale pricing.\n\nI can assist with:\n• Finding specific products (slabs, tiles, flooring, appliances)\n• Pricing and quotes\n• TanClub membership benefits\n• Shipping and delivery info\n\nWhat would you like to know?`;
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
  "Calacatta quartz",
  "LVT flooring under $2/sq. ft.",
  "White marble slabs",
];

// ── Mock Conversation ──────────────────────────────────────────

const mockConversation: ChatMessage[] = [
  {
    id: "mock-1",
    role: "user",
    content: "Hi, I'm a fabricator in Austin. I have a client who wants quartz countertops for a full kitchen remodel — about 45 sq ft with a waterfall island edge. What do you recommend?",
    timestamp: new Date(Date.now() - 600000),
  },
  {
    id: "mock-2",
    role: "assistant",
    content: `Great project! For a 45 sq ft kitchen with a waterfall island, here are my top recommendations:\n\n**Premium Picks:**\n• **Calacatta Laza (MSI)** — Warm white base with dramatic gold veining. Perfect for waterfall edges where the vein pattern continues down the side. Very popular in Austin right now.\n• **Taj Mahal Quartzite** — Natural stone with a soft gold tone. The #1 most-requested surface this quarter. Stunning on waterfall islands.\n• **Brittanicca Warm (Cambria)** — Rich warm veining on white, zero maintenance. Lifetime warranty.\n\n**Great Value Options:**\n• **Calacatta Verona (Silestone)** — Marble-look quartz at a mid-range price point. HybriQ+ technology for superior stain resistance.\n• **Empira White (Caesarstone)** — Clean white with subtle veining. Budget-friendly without sacrificing quality.\n\nFor 45 sq ft + waterfall edge, you'll want approximately **55-60 sq ft of material** to account for cuts and waste.\n\nWould you like pricing on any of these? I can also check current inventory at our Texas warehouse.`,
    timestamp: new Date(Date.now() - 540000),
  },
  {
    id: "mock-3",
    role: "user",
    content: "The client likes the marble look but wants zero maintenance. How does Calacatta Laza compare to Brittanicca Warm? And what's the price difference?",
    timestamp: new Date(Date.now() - 480000),
  },
  {
    id: "mock-4",
    role: "assistant",
    content: `Great question — both are excellent choices for a marble-look with zero maintenance. Here's a side-by-side:\n\n**Calacatta Laza (MSI)**\n• Material: Engineered quartz\n• Look: Warm white with bold gold/gray veining\n• Finish: Polished\n• Thickness: 2cm and 3cm available\n• Maintenance: Non-porous, no sealing required\n• Price range: $$$ (mid-premium)\n• Best for: Clients who want dramatic veining on a budget\n\n**Brittanicca Warm (Cambria)**\n• Material: Natural quartz surface\n• Look: Warm white with rich brown and gold veins\n• Finish: High Gloss or Matte\n• Thickness: 2cm and 3cm available\n• Maintenance: Non-porous, lifetime warranty from Cambria\n• Price range: $$$$ (premium)\n• Best for: Clients who want the highest quality + warranty\n\n**Price difference:** Brittanicca Warm typically runs **15-25% higher** than Calacatta Laza. For your 55 sq ft project, that could mean a difference of **$800-$1,200** in material cost.\n\n**My recommendation:** If your client prioritizes vein pattern on the waterfall edge, go with **Calacatta Laza** — MSI's bookmatching is excellent. If they want the lifetime warranty and name-brand confidence, **Brittanicca Warm** is worth the premium.\n\nWant me to pull live pricing for both?`,
    timestamp: new Date(Date.now() - 420000),
  },
  {
    id: "mock-5",
    role: "user",
    content: "Let's go with Calacatta Laza. Can you check inventory in Texas and get me a quote for 55 sq ft in 3cm polished?",
    timestamp: new Date(Date.now() - 360000),
  },
  {
    id: "mock-6",
    role: "assistant",
    content: `Excellent choice! Here's what I found for **Calacatta Laza (MSI) — 3cm Polished**:\n\n**Inventory Status:**\n• Dallas warehouse: 12 slabs in stock\n• Houston warehouse: 8 slabs in stock\n• Average slab size: ~52 sq ft\n• You'll need 2 slabs for 55 sq ft (with bookmatching for the waterfall)\n\n**Estimated Pricing:**\n• Trade price: Competitive wholesale pricing available for TanClub members\n• Includes: Material only (fabrication quoted separately)\n• Delivery to Austin: Available within 3-5 business days from Dallas\n\n**TanClub Savings:**\n• As a member, you'd earn **2-5% TanCash** on this order\n• Gold members get **10-day price lock** so your quote holds\n\nTo get your **exact personalized pricing**, I just need a few details so our sourcing team can prepare a formal quote. This takes less than 30 seconds.\n\nCould you share your **name** to get started?`,
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: "mock-7",
    role: "user",
    content: "Marcus Rivera",
    timestamp: new Date(Date.now() - 240000),
  },
  {
    id: "mock-8",
    role: "assistant",
    content: "Thanks, Marcus! What's the best **email** to reach you at?",
    timestamp: new Date(Date.now() - 200000),
  },
  {
    id: "mock-9",
    role: "user",
    content: "marcus@riverastoneworks.com",
    timestamp: new Date(Date.now() - 160000),
  },
  {
    id: "mock-10",
    role: "assistant",
    content: "And your **phone number**? This helps our team reach you faster for time-sensitive quotes.",
    timestamp: new Date(Date.now() - 120000),
  },
  {
    id: "mock-11",
    role: "user",
    content: "(512) 555-0147",
    timestamp: new Date(Date.now() - 80000),
  },
  {
    id: "mock-12",
    role: "assistant",
    content: `You're all set, Marcus!\n\nHere's a summary of your quote request:\n\n**Material:** Calacatta Laza (MSI) — 3cm Polished\n**Quantity:** 55 sq ft (2 slabs, bookmatched)\n**Application:** Kitchen countertops + waterfall island edge\n**Delivery:** Austin, TX\n**Source:** Dallas warehouse (3-5 business day delivery)\n\nOur sourcing team will reach out within **1 business hour** with your personalized pricing. They'll also confirm slab availability and can arrange a virtual slab viewing if you'd like to approve the exact pieces before ordering.\n\nIn the meantime, you can also call us directly: **(424) 250-7795**\n\nIs there anything else I can help you with?`,
    timestamp: new Date(Date.now() - 40000),
  },
];

// ── Previous Chat History (sidebar) ────────────────────────────

const previousChats = [
  { title: "Calacatta Laza quote — 55 sq ft", active: true },
  { title: "LVT flooring for multifamily units" },
  { title: "Taj Mahal quartzite availability" },
  { title: "Appliance package for 12-unit reno" },
  { title: "TanClub Gold membership benefits" },
];

// ── Page Component ──────────────────────────────────────────────

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(mockConversation);
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
            <span className="text-lg font-bold text-charcoal tracking-tight">
              Tan<span className="text-accent-orange">Win</span>Win
            </span>
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
              {previousChats.map((chat) => (
                <button
                  key={chat.title}
                  className={`flex items-center gap-2 w-full px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer text-left ${
                    chat.active
                      ? "text-gray-800 bg-gray-100 font-medium"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {chat.active && (
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
            href="tel:+14242507795"
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
          <span className="text-sm font-semibold text-charcoal">
            Tan<span className="text-accent-orange">Win</span>Win AI
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
