import type { MessagesDto } from "@/entities/messages/api";
import type { FileAttach } from "@/entities/messages/model/types";
import { apiInstance } from "@/shared/api";

export const sendMessageApi = {
  baseKey: "sendMessage",
  sendMessage: ({
    chatId,
    senderId,
    text,
    clientId,
    attachments,
  }: {
    chatId: number | undefined;
    senderId: number | undefined;
    text: string;
    clientId?: string;
    attachments: FileAttach[];
  }) => {
    return apiInstance<MessagesDto>("/messages/send-message", {
      method: "POST",
      data: { chatId, senderId, text, clientId, attachments },
    });
  },
};
