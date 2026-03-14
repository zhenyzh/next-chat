import { jsonApiInstance } from "@/shared/api";

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
    return jsonApiInstance("/messages/send-message", {
      method: "POST",
      json: { chatId, senderId, text },
    });
  },
};
