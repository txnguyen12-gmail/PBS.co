// Chat message with optional quick actions
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  quickActions?: string[];
}

// Lead capture
export interface LeadData {
  name: string;
  email: string;
  phone: string;
}

export type LeadStep = "idle" | "name" | "email" | "phone" | "submitted";
