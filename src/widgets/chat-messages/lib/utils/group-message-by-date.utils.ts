import type { ChatMessageGroup } from "../../model/types";
import type { MessagesDto } from "@/entities/messages/api";
import {
  filteredFilesByType,
  formatDate_yyyy_MM_dd,
  formatDate_HH_mm,
} from "@/shared/utils";

export function groupMessagesByDate(
  messages: MessagesDto[] | undefined,
  userIdMe?: number,
): ChatMessageGroup[] {
  if (!messages?.length) return [];

  const map = new Map<string, ChatMessageGroup>();

  for (const msg of messages) {
    const date = formatDate_yyyy_MM_dd(msg.createdAt);

    let group = map.get(date);

    if (!group) {
      group = {
        date,
        messages: [],
      };
      map.set(date, group);
    }

    group.messages.push({
      id: msg.id,
      fromMe: msg.senderId === userIdMe,
      chatId: msg.chatId,
      sender: msg.sender,
      content: {
        text: msg.text,
        audio: msg.audio,
        images: filteredFilesByType(msg.attachments, "image"),
        files: filteredFilesByType(msg.attachments, "file"),
      },
      statusMessage: {
        isSent: msg.isSent,
        isDelivered: msg.isDelivered,
        isRead: msg.isRead,
      },
      time: formatDate_HH_mm(msg.createdAt),
    });
  }
  return [...map.values()];
}
