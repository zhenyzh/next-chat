export type UsersStatusStore = UsersStatus & { actions: UsersStatusActions };

export type UsersStatus = {
  usersStatus: number[];
};

export type UsersStatusActions = {
  setOnlineUsers: (users: number[]) => void;
  setOnlineUser: (id: number) => void;
  setOfflineUser: (id: number) => void;
};
