// Product card returned by SourceAI API
export interface ProductCard {
  product_id: string;
  sku: string;
  model: string;
  name: string;
  primary_image_url: string | null;
  attributes: { key: string; value: string; unit?: string }[];
  price_display: string | null;
  category: string;
}

// Chat message with optional product cards and quick actions
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  cards?: ProductCard[];
  quickActions?: string[];
}

// SSE event from SourceAI streaming endpoint
export type SSEEventType =
  | "token"
  | "cards"
  | "quick_actions"
  | "done"
  | "error";

export interface SSEEvent {
  type: SSEEventType;
  data: unknown;
}

// Lead capture
export interface LeadData {
  name: string;
  email: string;
  phone: string;
}

export type LeadStep = "idle" | "name" | "email" | "phone" | "submitted";

// History API response
export interface HistoryResponse {
  conversation_id?: string;
  messages: Array<{
    id: string;
    role: "user" | "assistant";
    content: string;
    cards?: ProductCard[];
    quickActions?: string[];
  }>;
}
