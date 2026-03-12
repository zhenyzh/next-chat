import { useQuery } from "@tanstack/react-query";
import { chatUserApi } from "@/features/chat-user-list/api";

export function useGetChatUserQuery() {
  const { data: userChatList, isLoading } = useQuery({
    ...chatUserApi.getChatUsersAllQueryOptions(),
  });

  return {
    userChatList,
    isLoading,
  };
}
