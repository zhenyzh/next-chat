import type { FileAttachmentType } from "../types";

export type FileAttachStore = FileAttach & { actions: FileAttachActions };

export type FileAttach = {
  files: FileAttachmentType[];
};

export type FileAttachActions = {
  setFile: (file: File) => void;
  clearFile: (id: string) => void;
  clearAll: () => void;
};
