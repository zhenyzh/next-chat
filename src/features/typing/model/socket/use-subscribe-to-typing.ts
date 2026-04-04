import { useEffect } from "react";
import { useTypingUsersIdsActions } from "../store";
import { socketEvent, socketService } from "@/shared/socket";

export function useSubscribeToTyping() {
  const { addTypingUsers, removeTypingUsers } = useTypingUsersIdsActions();

  useEffect(() => {
    const unsubscribes = [
      socketService<{ userId: number }>(socketEvent.user_typing, ({ userId }) =>
        addTypingUsers(userId),
      ),
      socketService<{ userId: number }>(
        socketEvent.user_stop_typing,
        ({ userId }) => removeTypingUsers(userId),
      ),
    ];

    return () => {
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    };
  }, []);
}
