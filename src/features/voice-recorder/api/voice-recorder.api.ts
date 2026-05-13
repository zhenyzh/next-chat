import type { MessagesDto } from "@/entities/messages/api";
import { jsonApiInstance } from "@/shared/api";

export const voiceRecorderApi = {
  baseKey: "voiceRecorder",
  sendAudio: async ({
    chatId,
    senderId,
    audioBlob,
    clientId,
  }: {
    chatId: number | undefined;
    senderId: number | undefined;
    audioBlob: Blob;
    clientId?: string;
  }) => {
    const formData = new FormData();
    formData.append("file", audioBlob, "voice.webm");
    formData.append("chatId", String(chatId));
    formData.append("senderId", String(senderId));
    formData.append("clientId", String(clientId));

    return jsonApiInstance<MessagesDto>("/messages/send-audio", {
      method: "POST",
      data: formData,
    });
  },
};
