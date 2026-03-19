import { jsonApiInstance } from "@/shared/api";
import type { MessagesDto } from "@/entities/messages/api";

export const sendMessageApi = {
  baseKey: "sendMessage",
  sendMessage: ({
    chatId,
    senderId,
    text,
    clientId,
  }: {
    chatId: number | undefined;
    senderId: number | undefined;
    text: string;
    clientId?: string;
  }) => {
    return jsonApiInstance<MessagesDto>("/messages/send-message", {
      method: "POST",
      json: { chatId, senderId, text, clientId },
    });
  },
};
