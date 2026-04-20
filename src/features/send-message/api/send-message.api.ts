import type { FileAttachmentType } from "@/features/file-attach/model/types";
import type { MessagesDto } from "@/entities/messages/api";
import { jsonApiInstance } from "@/shared/api";

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
    attachments: FileAttachmentType[];
  }) => {
    return jsonApiInstance<MessagesDto>("/messages/send-message", {
      method: "POST",
      data: { chatId, senderId, text, clientId },
    });
  },
};
