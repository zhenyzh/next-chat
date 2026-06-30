import type { MessagesDto } from "@/entities/messages/api";
import type { Message } from "@/entities/messages/model/types";
import { filteredFilesByType, formatDate_HH_mm } from "@/shared/utils";

export function messageGroup(msg: MessagesDto, userId?: number) {
  return {
    id: msg.id,
    fromMe: msg.senderId === userId,
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
  } satisfies Message;
}
