import {
  userLoginSelector,
  userLoginActionsSelector,
} from "./user-login.selectors";
import { useUserLoginStore } from "./user-login.store";
import type { UserLoginStore } from "./user-login.types";

export const useUserLogin = (): UserLoginStore["user"] =>
  useUserLoginStore(userLoginSelector);

export const useUserLoginActions = (): UserLoginStore["actions"] =>
  useUserLoginStore(userLoginActionsSelector);
