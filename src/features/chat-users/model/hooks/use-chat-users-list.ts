import { useQuery } from "@tanstack/react-query";
import { chatUsersApi } from "../../api";
import { modifiedChatUsersModel } from "../../lib/selectors";
import { sortDataByCreatedAt } from "../../lib/utils";
import { useDebounce, useSearchQueryParams } from "@/shared/hooks";

export function useChatUsersList() {
  const {
    query: { recipientSearch },
  } = useSearchQueryParams();
  const recipientDebounce = useDebounce(recipientSearch);

  const { data, isLoading, isFetched } = useQuery({
    ...chatUsersApi.getChatUsersAllQueryOptions(recipientDebounce),
    select: (data) => sortDataByCreatedAt(data),
  });

  return {
    usersChat: modifiedChatUsersModel(data),
    isLoading,
    isFetched,
  };
}
