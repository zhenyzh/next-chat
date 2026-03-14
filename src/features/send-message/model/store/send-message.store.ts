import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { SendMessageStore } from "./send-message.types";

const defaultMessage = {
  text: "",
};

export const useSendMessageStore = create<SendMessageStore>()(
  immer((set) => ({
    ...defaultMessage,

    actions: {
      setText: (text) => {
        set((state) => {
          state.text = text;
        });
      },
      appendEmoji: (emoji) => {
        set((state) => {
          state.text += emoji;
        });
      },
      clearMessage: () => set(defaultMessage),
    },
  })),
);
