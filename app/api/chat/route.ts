import { streamText, convertToModelMessages, UIMessage } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { buildSystemPrompt } from "@/lib/chat-context";

// --- Rate limiting (in-memory) ---
const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 20; // requests per window
const RATE_WINDOW = 60_000; // 1 minute

// Cleanup stale entries every 60s
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateMap) {
    const recent = timestamps.filter((t) => now - t < RATE_WINDOW);
    if (recent.length === 0) {
      rateMap.delete(ip);
    } else {
      rateMap.set(ip, recent);
    }
  }
}, 60_000);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_WINDOW);
  if (recent.length >= RATE_LIMIT) {
    return true;
  }
  recent.push(now);
  rateMap.set(ip, recent);
  return false;
}

function getClientIP(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

// --- System prompt (cached) ---
let cachedSystemPrompt: string | null = null;

function getSystemPrompt(): string {
  if (!cachedSystemPrompt) {
    cachedSystemPrompt = buildSystemPrompt();
  }
  return cachedSystemPrompt;
}

// --- Route handler ---
export async function POST(request: Request) {
  // Rate limit check
  const ip = getClientIP(request);
  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: "Too many requests. Please wait a moment." }),
      { status: 429, headers: { "Content-Type": "application/json" } },
    );
  }

  const body = await request.json();
  const { messages } = body;

  // Validate messages
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(
      JSON.stringify({ error: "Messages are required." }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (messages.length > 30) {
    return new Response(
      JSON.stringify({ error: "Conversation too long. Please start a new chat." }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  // Validate last message content length
  const lastMessage = messages[messages.length - 1] as UIMessage | undefined;
  const lastContent = lastMessage?.parts
    ?.filter((p: { type: string }) => p.type === "text")
    .map((p: { type: string; text?: string }) => p.text ?? "")
    .join("") ?? "";
  if (lastContent.length > 500) {
    return new Response(
      JSON.stringify({ error: "Message too long. Please keep it under 500 characters." }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const result = streamText({
    model: anthropic("claude-haiku-4-5"),
    system: {
      role: "system",
      content: getSystemPrompt(),
      providerOptions: {
        anthropic: { cacheControl: { type: "ephemeral" } },
      },
    },
    messages: await convertToModelMessages(messages as UIMessage[]),
  });

  return result.toUIMessageStreamResponse();
}
