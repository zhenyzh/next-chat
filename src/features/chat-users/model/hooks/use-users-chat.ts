import { useQuery } from "@tanstack/react-query";
import { chatUsersApi } from "../../api";
import { modifiedChatUsersModel } from "../../lib/selectors";

export function useUsersChat() {
  const { data, isLoading } = useQuery({
    ...chatUsersApi.getChatUsersAllQueryOptions(),
  });

  return {
    usersChat: modifiedChatUsersModel(data),
    isLoading,
  };
}
