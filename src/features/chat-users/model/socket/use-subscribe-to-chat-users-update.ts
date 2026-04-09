import { useEffect } from "react";
import { chatUsersApi, type ChatUsersDto } from "@/features/chat-users/api";
import { socketService, socketEvent } from "@/shared/socket";
import { useSearchQueryParams } from "@/shared/hooks";
import { queryClient } from "@/shared/api";

export function useSubscribeToChatUsersUpdate() {
  const {
    query: { recipientId },
  } = useSearchQueryParams();

  const queryKey = chatUsersApi.getChatUsersAllQueryOptions().queryKey;

  useEffect(() => {
    void queryClient.invalidateQueries({ queryKey });

    const unsubscribe = socketService<ChatUsersDto[]>(
      socketEvent.chat_users_update,
      (data) => queryClient.setQueryData(queryKey, data),
    );

    return () => unsubscribe();
  }, [recipientId, queryKey]);
}
