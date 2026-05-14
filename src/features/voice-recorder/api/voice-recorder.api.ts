import type { MessagesDto } from "@/entities/messages/api";
import { formDataVoiceRecorder } from "../lib/utils";
import { apiInstance } from "@/shared/api";

export const voiceRecorderApi = {
  baseKey: "voiceRecorder",
  sendAudio: ({
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
    return apiInstance<MessagesDto>("/messages/send-audio", {
      method: "POST",
      data: formDataVoiceRecorder(chatId, senderId, audioBlob, clientId),
    });
  },
};
