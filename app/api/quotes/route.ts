import { NextRequest, NextResponse } from "next/server";
import { notifyNewLead } from "@/lib/notify";

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

    const itemsSummary = (items || [])
      .map((i: { productName: string; quantity: number; unit: string }) =>
        `${i.productName} — ${i.quantity} ${i.unit}`
      )
      .join("\n");

    await notifyNewLead({
      type: "quote",
      name,
      email,
      phone,
      details: [
        company ? `Company: ${company}` : "",
        projectType ? `Project: ${projectType}` : "",
        deliveryLocation ? `Delivery: ${deliveryLocation}` : "",
        itemsSummary,
        notes ? `Notes: ${notes}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process quote request" },
      { status: 500 }
    );
  }
}
