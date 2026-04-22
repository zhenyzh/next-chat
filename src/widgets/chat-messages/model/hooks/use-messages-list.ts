import { useQuery } from "@tanstack/react-query";
import { groupMessagesByDate } from "../../lib/utils";
import { useCurrentChat } from "@/entities/chat/model/hooks";
import { useUserLogin } from "@/entities/user/user-login/model/store";
import { messagesApi } from "@/entities/messages/api";

export function useMessagesList() {
  const { chatId } = useCurrentChat();
  const { id } = useUserLogin();

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
