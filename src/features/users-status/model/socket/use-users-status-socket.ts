import { useEffect } from "react";
import { useUsersStatusActions } from "../store";
import { useGetUserQuery } from "@/entities/user/model/hooks";
import { socketEvent, getSocket, socketService } from "@/shared/socket";

export function useUsersStatusSocket() {
  const { user: { id: userId } = {} } = useGetUserQuery();

  const { setOnlineUsers, setOnlineUser, setOfflineUser } =
    useUsersStatusActions();

  useEffect(() => {
    if (!userId) return;

    const socket = getSocket();
    socket.connect();

    socket.emit(socketEvent.user_online_connect, userId);
    socket.emit(socketEvent.get_online_users);

    const unsubscribes = [
      socketService<number[]>(socketEvent.online_users, (users) =>
        setOnlineUsers(users),
      ),
      socketService<number>(socketEvent.user_online, (id) => setOnlineUser(id)),
      socketService<number>(socketEvent.user_offline, (id) =>
        setOfflineUser(id),
      ),
    ];

    return () => {
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    };
  }, [userId]);
}
