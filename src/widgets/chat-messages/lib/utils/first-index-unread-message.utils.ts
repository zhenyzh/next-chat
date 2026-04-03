import type { Message } from "@/entities/messages/model/types";

export function firstIndexUnreadMessage(messages: Message[]) {
  const firstIndexUnread = messages.findIndex(
    (msg) => !msg.fromMe && !msg.statusMessage.isRead,
  );

  if (firstIndexUnread !== -1) {
    return firstIndexUnread;
  }
}
