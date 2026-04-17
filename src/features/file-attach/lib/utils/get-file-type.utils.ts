import type { FileType } from "../../model/store";

export function getFileType(file: File): FileType {
  return file.type.startsWith("image/") ? "image" : "file";
}
