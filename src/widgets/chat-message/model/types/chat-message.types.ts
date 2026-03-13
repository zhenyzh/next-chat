import type { Message } from "@/entities/messages";

export type ChatMessageGroup = {
  data: string;
  messages: Message[];
};
