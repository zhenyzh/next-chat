import { useQuery } from "@tanstack/react-query";
import { groupMessagesByDate } from "../../lib/utils";
import { useOpenCurrentChat } from "@/entities/chat/model/hooks";
import { useUser } from "@/entities/user/model/store";
import { messagesApi } from "@/entities/messages/api";

export function useMessages() {
  const { chatId } = useOpenCurrentChat();
  const { id } = useUser();

  const { data: messagesData, isLoading } = useQuery({
    ...messagesApi.getMessageQueryOptions({ chatId }),
    enabled: !!chatId,
  });

  return {
    messages: groupMessagesByDate(messagesData, id),
    isLoading,
    hasChatId: !!chatId,
  };
}
