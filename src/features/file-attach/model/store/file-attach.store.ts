import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { FileAttachStore } from "./file-attach.types";

const defaultMessage = {
  message: "",
};

export const useFileAttachStore = create<FileAttachStore>()(
  immer((set) => ({
    ...defaultMessage,

    actions: {
      setText: (text) => {
        set((state) => {
          state.message = text;
        });
      },
      appendEmoji: (emoji) => {
        set((state) => {
          state.message += emoji;
        });
      },
      clearMessage: () => set(defaultMessage),
    },
  })),
);
