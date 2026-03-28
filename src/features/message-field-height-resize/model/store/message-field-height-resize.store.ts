import { create } from "zustand";
import type {
  MessageFieldHeightResizeStore,
  MessageFieldHeightResize,
} from "./message-field-height-resize.types";

const defaultMessage: MessageFieldHeightResize = {
  height: 0,
};

export const useMessageFieldHeightResizeStore =
  create<MessageFieldHeightResizeStore>()((set) => ({
    ...defaultMessage,

    actions: {
      setHeight: (height) => {
        set({ height });
      },
    },
  }));
