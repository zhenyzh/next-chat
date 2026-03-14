import { useQuery } from "@tanstack/react-query";
import { groupMessagesByDateUtils } from "../../lib/utils";
import { useGetUserQuery } from "@/entities/user/model/hooks";
import { useChatsOpenMutation } from "@/entities/chats/model/hooks";
import { messagesApi } from "@/entities/messages/api";

export function useGetMessages() {
  const { chatId } = useChatsOpenMutation();
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
