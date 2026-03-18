import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { SendMessageStore } from "./send-message.types";

const defaultMessage = {
  message: "",
};

export const useSendMessageStore = create<SendMessageStore>()(
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
