import type { Message } from "@/entities/messages/model/types";

export function firstIndexUnreadMessage(messages: Message[]) {
  return messages.findIndex((msg) => !msg.fromMe && !msg.statusMessage.isRead);
}
