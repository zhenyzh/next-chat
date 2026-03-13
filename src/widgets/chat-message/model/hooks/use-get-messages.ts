import { useQuery } from "@tanstack/react-query";
import { chatMessageApi } from "@/widgets/chat-message/api";
import { groupMessagesByDateUtils } from "../../lib/utils";
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
    messages: groupMessagesByDateUtils(messagesData, id),
    isLoading,
    hasChatId: !!chatId,
  };
}
