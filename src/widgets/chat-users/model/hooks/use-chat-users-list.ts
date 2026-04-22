import { useQuery } from "@tanstack/react-query";
import { modifiedChatUsersModel } from "../../lib/selectors";
import { sortDataByCreatedAt } from "../../lib/utils";
import { usersRecipientApi } from "@/entities/user/users-recipient/api";
import { useDebounce, useSearchQueryParams } from "@/shared/hooks";

export function useChatUsersList() {
  const {
    query: { recipientSearch },
  } = useSearchQueryParams();

  const recipientSearchDebounce = useDebounce(recipientSearch);

  const isTypingSearch = recipientSearchDebounce !== recipientSearch;

  const { data, isLoading } = useQuery({
    ...usersRecipientApi.getChatUsersAllQueryOptions(recipientSearchDebounce),
    select: (data) => sortDataByCreatedAt(data),
  });

  return {
    usersChat: modifiedChatUsersModel(data),
    isLoading: isLoading || isTypingSearch,
  };
}
