import type { UserLogin } from "../types";

export type UserLoginStore = UserLoginType & { actions: UserLoginActions };

export type UserLoginType = {
  user: UserLogin;
};

export type UserLoginActions = {
  setUser: (user: UserLogin) => void;
  clearUser: () => void;
};
