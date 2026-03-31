import { useEffect } from "react";
import { chatUsersApi, type ChatUsersDto } from "@/features/chat-users/api";
import { socketService, socketEvent } from "@/shared/socket";
import { queryClient } from "@/shared/api";

export function useSubscribeChatUsers() {
  const queryKey = chatUsersApi.getChatUsersAllQueryOptions().queryKey;

  useEffect(() => {
    const unsubscribe = socketService<ChatUsersDto[]>(
      socketEvent.users_with_chats_update,
      (data) => queryClient.setQueryData(queryKey, data),
    );

    return () => unsubscribe();
  }, [queryKey]);
}
