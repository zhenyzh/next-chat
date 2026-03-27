import type { User } from "../types";

export type UserStore = UserType & { actions: UserActions };

export type UserType = {
  user: User;
};

export type UserActions = {
  setUser: (user: User) => void;
  clearUser: () => void;
};
