import { useQuery } from "@tanstack/react-query";
import { chatUsersApi } from "../../api";
import { modifiedChatUsersModel } from "../../lib/selectors";
import { sortDataByCreatedAt } from "../../lib/utils";
import { useDebounce, useSearchQueryParams } from "@/shared/hooks";

export function useChatUsersList() {
  const {
    query: { recipientsSearch },
  } = useSearchQueryParams();
  const recipientsDebounce = useDebounce(recipientsSearch);

  const { data, isLoading } = useQuery({
    ...chatUsersApi.getChatUsersAllQueryOptions(recipientsDebounce),
    select: (data) => sortDataByCreatedAt(data),
  });

  return {
    usersChat: modifiedChatUsersModel(data),
    isLoading,
  };
}
