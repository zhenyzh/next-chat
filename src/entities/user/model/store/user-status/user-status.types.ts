export type UserStatusStore = UserStatus & { actions: UserStatusActions };

export type UserStatus = {
  usersStatus: number[];
};

export type UserStatusActions = {
  setOnlineUsers: (users: number[]) => void;
  setOnlineUser: (id: number) => void;
  setOfflineUser: (id: number) => void;
};
