import { jsonApiInstance } from "@/shared/api";
import type { MessagesDto } from "@/entities/messages/api";

export const sendMessageApi = {
  baseKey: "sendMessage",
  sendMessage: ({
    chatId,
    senderId,
    text,
  }: {
    chatId: number | undefined;
    senderId: number | undefined;
    text: string;
  }) => {
    return jsonApiInstance<MessagesDto>("/messages/send-message", {
      method: "POST",
      json: { chatId, senderId, text },
    });
  },
};
