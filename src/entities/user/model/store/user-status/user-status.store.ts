import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { UserStatus, UserStatusStore } from "./user-status.types";

const defaultMessage: UserStatus = {
  usersStatus: [],
};

export const useUsersStatusStore = create<UserStatusStore>()(
  immer((set) => ({
    ...defaultMessage,

    actions: {
      setOnlineUsers: (users) => {
        set((state) => {
          state.usersStatus = users;
        });
      },
      setOnlineUser: (userId) => {
        set((state) => {
          if (!state.usersStatus.includes(userId)) {
            state.usersStatus.push(userId);
          }
        });
      },
      setOfflineUser: (userId) => {
        set((state) => {
          state.usersStatus = state.usersStatus.filter((id) => id !== userId);
        });
      },
    },
  })),
);
