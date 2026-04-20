import type {
  FileAttach,
  FileAttachType,
} from "@/entities/messages/model/types";

export function filteredFilesByType(
  files: FileAttach[],
  typeFile: FileAttachType,
) {
  return files?.filter((file) => file.type === typeFile);
}
