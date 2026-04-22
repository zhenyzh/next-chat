import type { UserStore } from "./user.types";

export const userSelector = (state: UserStore) => state.user;

export const userActionsSelector = (state: UserStore) => state.actions;
