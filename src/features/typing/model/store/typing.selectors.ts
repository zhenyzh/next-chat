import type { TypingStore } from "./typing.types";

export const typingUsersIdsSelector = (state: TypingStore) =>
  state.typingUsersIds;

export const typingUsersActionsSelector = (state: TypingStore) => state.actions;
