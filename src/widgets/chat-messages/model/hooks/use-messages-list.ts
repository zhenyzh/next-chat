import { useQuery } from "@tanstack/react-query";
import { groupMessagesByDate } from "../../lib/utils";
import { useCurrentChat } from "@/entities/chat/model/hooks";
import { useUser } from "@/entities/user/model/store";
import { messagesApi } from "@/entities/messages/api";

export function useMessagesList() {
  const { chatId } = useCurrentChat();
  const { id } = useUser();

  const { data: messages, isLoading } = useQuery({
    ...messagesApi.getMessageQueryOptions({ chatId }),
    enabled: !!chatId,
    select: (message) => groupMessagesByDate(message, id),
  });

  return {
    messages,
    isLoading,
  };
}
