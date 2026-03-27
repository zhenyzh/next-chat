import { userSelector, userActionsSelector } from "./user.selectors";
import { useUserStore } from "./user.store";
import type { UserStore } from "./user.types";

export const useUser = (): UserStore["user"] => useUserStore(userSelector);

export const useUserActions = (): UserStore["actions"] =>
  useUserStore(userActionsSelector);
