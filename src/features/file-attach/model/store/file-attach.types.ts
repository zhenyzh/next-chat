import type { FileAttach } from "@/entities/messages/model/types";

export type FileAttachStore = FileAttachment & { actions: FileAttachActions };

export type FileAttachment = {
  files: FileAttach[];
};

export type FileAttachActions = {
  setFile: (file: FileAttach) => void;
  clearFile: (id: string) => void;
  clearFiles: () => void;
};
