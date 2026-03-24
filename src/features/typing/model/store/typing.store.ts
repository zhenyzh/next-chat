import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { Typing, TypingStore } from "./typing.types";

const defaultTyping: Typing = {
  typingUsersIds: [],
};

export const useTypingStore = create<TypingStore>()(
  immer((set) => ({
    ...defaultTyping,

    actions: {
      addTypingUsers: (id) =>
        set((state) => {
          if (!state.typingUsersIds.includes(id)) {
            state.typingUsersIds.push(id);
          }
        }),
      removeTypingUsers: (id) =>
        set((state) => {
          state.typingUsersIds = state.typingUsersIds.filter(
            (userId) => userId !== id,
          );
        }),
    },
  })),
);
