import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import { join } from "path";

const DATA_DIR = join(process.cwd(), ".data");
const QUOTES_FILE = join(DATA_DIR, "quotes.json");

interface QuoteItem {
  productId: string;
  productName: string;
  quantity: number;
  unit: string;
}

interface Quote {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType?: string;
  deliveryLocation?: string;
  items: QuoteItem[];
  notes?: string;
  status: "pending" | "quoted" | "accepted" | "declined";
  createdAt: string;
}

async function getQuotes(): Promise<Quote[]> {
  try {
    const data = await readFile(QUOTES_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveQuotes(quotes: Quote[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(QUOTES_FILE, JSON.stringify(quotes, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, projectType, deliveryLocation, items, notes } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    const quote: Quote = {
      id: `quote-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name,
      email,
      phone,
      company: company || "",
      projectType: projectType || "",
      deliveryLocation: deliveryLocation || "",
      items: items || [],
      notes: notes || "",
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    const quotes = await getQuotes();
    quotes.push(quote);
    await saveQuotes(quotes);

    return NextResponse.json({ success: true, id: quote.id });
  } catch {
    return NextResponse.json(
      { error: "Failed to save quote" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const quotes = await getQuotes();
  return NextResponse.json(quotes);
}
