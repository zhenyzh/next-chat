import { create } from "zustand";
import type { UserStore } from "./user.types";
import type { User } from "../types";

const defaultUser = {
  user: {} as User,
};

export const useLoginStore = create<UserStore>((set) => ({
  ...defaultUser,

  actions: {
    setUser: (user) => set({ user }),
    clearUser: () => set(defaultUser),
  },
}));
