import { useEffect } from "react";
import { chatUsersApi, type ChatUsersDto } from "@/features/chat-users/api";
import { socketService, socketEvent } from "@/shared/socket";
import { queryClient } from "@/shared/api";

export function useSubscribeUpdateChatUsers(isBottom: boolean) {
  const queryKey = chatUsersApi.getChatUsersAllQueryOptions().queryKey;

  useEffect(() => {
    const unsubscribe = socketService<ChatUsersDto[]>(
      socketEvent.chat_users_update,
      (data) =>
        queryClient.setQueryData(
          queryKey,
          data.map((chat) =>
            isBottom
              ? {
                  ...chat,
                  countUnreadMessage: 0,
                  isRead: true,
                }
              : chat,
          ),
        ),
    );

    return () => unsubscribe();
  }, [queryKey, isBottom]);
}
