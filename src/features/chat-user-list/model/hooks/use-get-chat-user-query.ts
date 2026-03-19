import { useQuery } from "@tanstack/react-query";
import { chatUserApi } from "../../api";

export function useGetChatUserQuery() {
  const { data: userChatList, isLoading } = useQuery({
    ...chatUserApi.getChatUsersAllQueryOptions(),
  });

  return {
    userChatList,
    isLoading,
  };
}
