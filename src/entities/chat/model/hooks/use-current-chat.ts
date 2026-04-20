import { useQuery } from "@tanstack/react-query";
import { chatApi } from "@/entities/chat/api";
import { useSearchQueryParams } from "@/shared/hooks";

export function useCurrentChat() {
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
