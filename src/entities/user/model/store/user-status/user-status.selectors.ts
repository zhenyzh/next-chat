import type { UserStatusStore } from "./user-status.types";

export const usersStatusSelector = (state: UserStatusStore) =>
  state.usersStatus;

export const usersStatusActionsSelector = (state: UserStatusStore) =>
  state.actions;
