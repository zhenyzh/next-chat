import type { Message } from "@/entities/messages/model/types";

export type ChatMessageGroup = {
  date: string;
  messages: Message[];
};
