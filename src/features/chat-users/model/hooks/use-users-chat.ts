import { useQuery } from "@tanstack/react-query";
import { chatUsersApi } from "../../api";

export function useUsersChat() {
  const { data: userChatList, isLoading } = useQuery({
    ...chatUsersApi.getChatUsersAllQueryOptions(),
  });

  return {
    userChatList,
    isLoading,
  };
}
