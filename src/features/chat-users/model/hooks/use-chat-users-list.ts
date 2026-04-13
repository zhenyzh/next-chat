import { useQuery } from "@tanstack/react-query";
import { chatUsersApi } from "../../api";
import { modifiedChatUsersModel } from "../../lib/selectors";
import { sortDataByCreatedAt } from "../../lib/utils";
import { useDebounce, useSearchQueryParams } from "@/shared/hooks";

export function useChatUsersList() {
  const {
    query: { recipientSearch },
  } = useSearchQueryParams();

  const recipientSearchDebounce = useDebounce(recipientSearch);

  const isTypingSearch =
    !!recipientSearch && recipientSearchDebounce !== recipientSearch;

  const { data, isLoading } = useQuery({
    ...chatUsersApi.getChatUsersAllQueryOptions(recipientSearchDebounce),
    select: (data) => sortDataByCreatedAt(data),
  });

  return {
    usersChat: modifiedChatUsersModel(data),
    isLoading: isLoading || isTypingSearch,
  };
}
