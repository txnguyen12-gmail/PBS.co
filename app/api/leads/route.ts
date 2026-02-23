import { NextRequest, NextResponse } from "next/server";
import { notifyNewLead } from "@/lib/notify";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, chatSummary } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    await notifyNewLead({
      type: "lead",
      name,
      email,
      phone,
      details: chatSummary || undefined,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
