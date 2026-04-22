import type { UserLoginStore } from "./user-login.types";

export const userLoginSelector = (state: UserLoginStore) => state.user;

export const userLoginActionsSelector = (state: UserLoginStore) =>
  state.actions;
