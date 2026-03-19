import type { Message } from "@/entities/messages";

export type ChatMessageGroup = {
  date: string;
  messages: Message[];
};
