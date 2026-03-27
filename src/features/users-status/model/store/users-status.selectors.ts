import type { UsersStatusStore } from "./users-status.types";

export const usersStatusSelector = (state: UsersStatusStore) =>
  state.usersStatus;

export const usersStatusActionsSelector = (state: UsersStatusStore) =>
  state.actions;
