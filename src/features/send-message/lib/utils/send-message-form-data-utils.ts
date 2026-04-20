import type { FileAttachmentType } from "@/features/file-attach/model/types";

export function sendMessageFormData(
  chatId?: number | undefined,
  senderId?: number | undefined,
  text?: string,
  clientId?: string,
  attachments?: FileAttachmentType[],
) {
  const formData = new FormData();
  formData.append("chatId", String(chatId));
  formData.append("senderId", String(senderId));
  formData.append("text", String(text));
  formData.append("clientId", String(clientId));

  attachments?.forEach((attachment: FileAttachmentType) => {
    if (attachment.typeFile === "file") {
      formData.append("file", attachment.file);
    } else {
      formData.append("image", attachment.file);
    }
  });

  return { formData };
}
