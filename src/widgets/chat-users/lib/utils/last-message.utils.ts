import type { FileAttach } from "@/entities/messages/model/types";
import { declination, filteredFilesByType } from "@/shared/utils";

export function lastMessage(
  message: string | null,
  attachments: FileAttach[] | null,
) {
  const imageSize = filteredFilesByType<FileAttach>(
    attachments,
    "image",
  )?.length;
  const fileSize = filteredFilesByType<FileAttach>(attachments, "file")?.length;

  if (imageSize && fileSize) {
    const sum = imageSize + fileSize;
    const word = declination(sum, ["Вложение", "Вложения", "Вложений"]);
    return messageJoin(message, sum, word);
  }

  if (imageSize) {
    const word = declination(imageSize, [
      "Фотография",
      "Фотографии",
      "Фотографий",
    ]);
    return messageJoin(message, imageSize, word);
  }
  if (fileSize) {
    const word = declination(fileSize, ["Файл", "Файла", "Файлов"]);
    return messageJoin(message, fileSize, word);
  }

  return message;
}

const messageJoin = (msg: string | null, value: number, word: string) =>
  [msg, `${value} ${word}`].filter(Boolean).join(", ");
