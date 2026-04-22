import { userSelector, userActionsSelector } from "./user.selectors";
import { useLoginStore } from "./user.store";
import type { UserStore } from "./user.types";

export const useUser = (): UserStore["user"] => useLoginStore(userSelector);

export const useUserActions = (): UserStore["actions"] =>
  useLoginStore(userActionsSelector);
