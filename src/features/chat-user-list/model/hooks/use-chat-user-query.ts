import { useQuery } from "@tanstack/react-query";
import { chatUserApi } from "@/features/chat-user-list/api";

export function useChatUserQuery() {
  const { data: userChat, isLoading } = useQuery({
    ...chatUserApi.getChatUsersAllQueryOptions(),
  });

  return {
    userChat,
    isLoading,
  };
}
