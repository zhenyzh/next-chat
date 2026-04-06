import { useQuery } from "@tanstack/react-query";
import { useSearchQueryParams } from "@/shared/hooks";
import { chatApi } from "@/entities/chat/api";

export function useOpenCurrentChat() {
  const {
    query: { recipientId: id },
  } = useSearchQueryParams();

  const recipientId = Number(id);

  const { data, isLoading } = useQuery({
    ...chatApi.getCurrentChatOpenQueryOptions({ recipientId }),
    enabled: !!recipientId,
  });

  return {
    chatId: data?.chatId,
    isLoading,
  };
}
