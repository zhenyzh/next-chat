import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { FileAttach, FileAttachStore } from "./file-attach.types";
import { getFileType } from "../../lib/utils";

const defaultFile: FileAttach = {
  files: [],
};

export const useFileAttachStore = create<FileAttachStore>()(
  immer((set) => ({
    ...defaultFile,

    actions: {
      setFile: (file) => {
        set((state) => {
          const newFile = {
            id: crypto.randomUUID(),
            typeFile: getFileType(file),
            file,
          };
          state.files = [...state.files, newFile];
        });
      },
      clearFile: (id) => {
        set((state) => {
          state.files = state.files.filter((file) => file.id !== id);
        });
      },
      clearAll: () => {
        set((state) => {
          state.files = [];
        });
      },
    },
  })),
);
