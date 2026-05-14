import { messageJoin } from "./message-join.utils";
import type { FileAttach } from "@/entities/messages/model/types";
import { declination, filteredFilesByType } from "@/shared/utils";

export function lastMessage(
  message: string | null,
  attachments: FileAttach[] | null,
  audio: FileAttach | null,
) {
  const imageSize = filteredFilesByType<FileAttach>(
    attachments,
    "image",
  )?.length;
  const fileSize = filteredFilesByType<FileAttach>(attachments, "file")?.length;

  let forceMessage = message;

  if (audio?.size) {
    forceMessage = "Голосовое сообщение";
  }

  if (imageSize && fileSize) {
    const sum = imageSize + fileSize;
    const word = declination(sum, ["Вложение", "Вложения", "Вложений"]);
    return messageJoin(forceMessage, sum, word);
  }

  if (imageSize) {
    const word = declination(imageSize, [
      "Фотография",
      "Фотографии",
      "Фотографий",
    ]);
    return messageJoin(forceMessage, imageSize, word);
  }
  if (fileSize) {
    const word = declination(fileSize, ["Файл", "Файла", "Файлов"]);
    return messageJoin(forceMessage, fileSize, word);
  }

  return forceMessage;
}
