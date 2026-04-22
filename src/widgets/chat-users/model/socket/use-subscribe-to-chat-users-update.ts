import { useEffect } from "react";
import {
  usersRecipientApi,
  type UsersRecipientDto,
} from "@/entities/user/users-recipient/api";
import { socketService, socketEvent } from "@/shared/socket";
import { useSearchQueryParams } from "@/shared/hooks";
import { queryClient } from "@/shared/api";

export function useSubscribeToChatUsersUpdate() {
  const {
    query: { recipientId },
  } = useSearchQueryParams();

  const queryKey = usersRecipientApi.getChatUsersAllQueryOptions().queryKey;

  useEffect(() => {
    void queryClient.invalidateQueries({ queryKey });

    const unsubscribe = socketService<UsersRecipientDto[]>(
      socketEvent.chat_users_update,
      (data) => queryClient.setQueryData(queryKey, data),
    );

    return () => unsubscribe();
  }, [recipientId, queryKey]);
}
