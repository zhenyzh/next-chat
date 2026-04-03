import { useQuery } from "@tanstack/react-query";
import { chatUsersApi } from "../../api";
import { modifiedChatUsersModel } from "../../lib/selectors";
import { sortDataByCreatedAt } from "../../lib/utils";

export function useChatUsersList() {
  const { data, isLoading } = useQuery({
    ...chatUsersApi.getChatUsersAllQueryOptions(),
    select: (data) => sortDataByCreatedAt(data),
  });

  return {
    usersChat: modifiedChatUsersModel(data),
    isLoading,
  };
}
