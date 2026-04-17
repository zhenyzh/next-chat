export type FileAttachStore = FileAttach & { actions: FileAttachActions };

export type FileAttach = {
  files: FileItem[];
};

export type FileItem = { id: string; typeFile: FileType; file: File };

export type FileType = "image" | "file";

export type FileAttachActions = {
  setFile: (file: File) => void;
  clearFile: (id: string) => void;
  clearAll: () => void;
};
