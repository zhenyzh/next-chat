import type { Message } from "@/entities/messages";

export type ChatMessage = {
  data: string;
  messages: Message[];
};
