import { create } from "zustand";
import type {
  MessageFieldHeightStore,
  MessageFieldHeight,
} from "./message-field-height.types";

const defaultMessage: MessageFieldHeight = {
  height: 0,
};

export const useMessageFieldHeightStore = create<MessageFieldHeightStore>()(
  (set) => ({
    ...defaultMessage,

    actions: {
      setHeight: (height) => {
        set({ height });
      },
    },
  }),
);
