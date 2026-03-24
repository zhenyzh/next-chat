import {
  typingUsersIdsSelector,
  typingUsersActionsSelector,
} from "./typing.selectors";
import { useTypingStore } from "./typing.store";
import type { TypingStore } from "./typing.types";

export const useTypingUsersIds = (): TypingStore["typingUsersIds"] =>
  useTypingStore(typingUsersIdsSelector);

export const useTypingUserIdsActions = (): TypingStore["actions"] =>
  useTypingStore(typingUsersActionsSelector);
