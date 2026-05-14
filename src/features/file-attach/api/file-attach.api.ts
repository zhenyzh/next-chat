import type { FileAttach } from "@/entities/messages/model/types";
import { apiInstance } from "@/shared/api";

export const fileAttachApi = {
  baseKey: "fileAttach",
  sendFilesAttach: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    return apiInstance<FileAttach>("/files-attach/upload", {
      method: "POST",
      data: formData,
    });
  },
};
