import { create } from "zustand";
import type { UserLoginStore } from "./user-login.types";
import type { UserLogin } from "../types";

const defaultUser = {
  user: {} as UserLogin,
};

export const useUserLoginStore = create<UserLoginStore>((set) => ({
  ...defaultUser,

  actions: {
    setUser: (user) => set({ user }),
    clearUser: () => set(defaultUser),
  },
}));
