import { useQuery } from "@tanstack/react-query";
import { chatMessageApi } from "@/widgets/chat-message/api";
import { modificationMessageSelectors } from "../../lib/selectors";
import { useChatOpenMutation } from "@/features/chat-user-list/model/hooks";
import { useGetUserQuery } from "@/entities/user/model/hooks";

export function useGetMessages() {
  const { chatId } = useChatOpenMutation();
  const { user: { id } = {} } = useGetUserQuery();

  const { data: messagesData, isLoading } = useQuery({
    ...chatMessageApi.getMessageQueryOptions({ chatId }),
    enabled: !!chatId,
  });

  return {
    messages: modificationMessageSelectors(messagesData, id),
    isLoading,
    hasChatId: !!chatId,
  };
}
