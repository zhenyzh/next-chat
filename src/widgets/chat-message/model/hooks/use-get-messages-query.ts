import { useQuery } from "@tanstack/react-query";
import { groupMessagesByDateUtils } from "../../lib/utils";
import { useChatOpenCacheQuery } from "@/entities/chat/model/hooks";
import { useGetUserQuery } from "@/entities/user/model/hooks";
import { messagesApi } from "@/entities/messages/api";

export function useGetMessagesQuery() {
  const { chatId } = useChatOpenCacheQuery();
  const { user: { id } = {} } = useGetUserQuery();

  const { data: messagesData, isLoading } = useQuery({
    ...messagesApi.getMessageQueryOptions({ chatId }),
    enabled: !!chatId,
  });

  return {
    messages: groupMessagesByDateUtils(messagesData, id),
    isLoading,
    hasChatId: !!chatId,
  };
}
