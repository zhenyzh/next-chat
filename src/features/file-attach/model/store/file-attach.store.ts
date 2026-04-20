import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { FileAttachment, FileAttachStore } from "./file-attach.types";

const defaultFile: FileAttachment = {
  files: [],
};

export const useFileAttachStore = create<FileAttachStore>()(
  immer((set) => ({
    ...defaultFile,

    actions: {
      setFile: (file) => {
        set((state) => {
          state.files = [...state.files, file];
        });
      },
      clearFile: (id) => {
        set((state) => {
          state.files = state.files.filter((file) => file.id !== id);
        });
      },
      clearFiles: () => {
        set((state) => {
          state.files = [];
        });
      },
    },
  })),
);
