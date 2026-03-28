import type { Message } from "@/entities/messages";

export function firstIndexUnreadMessageUtils(messages: Message[]) {
  const firstIndexUnread = messages.findIndex(
    (msg) => !msg.fromMe && !msg.statusMessage.isRead,
  );

  if (firstIndexUnread === -1) return;

  return firstIndexUnread;
}
