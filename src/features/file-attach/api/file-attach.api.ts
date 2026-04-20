import type { FileAttach } from "@/entities/messages/model/types";
import { jsonApiInstance } from "@/shared/api";

export const fileAttachApi = {
  baseKey: "fileAttach",
  sendFilesAttach: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    return jsonApiInstance<FileAttach>("/files-attach/upload", {
      method: "POST",
      data: formData,
    });
  },
};
