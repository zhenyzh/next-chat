import { useQuery } from "@tanstack/react-query";
import { chatUserCurrentApi } from "@/entities/chat-user/api";
import { useSearchQueryParams } from "@/shared/hooks";

export function useChatUserRecipient() {
  const {
    query: { recipientId: id },
  } = useSearchQueryParams();

  const recipientId = Number(id);

  const { data: recipientData, isLoading } = useQuery({
    ...chatUserCurrentApi.getChatUserCurrentQueryOptions(recipientId),
    enabled: !!recipientId,
  });

  return {
    recipientId,
    recipientData,
    isLoading,
  };
}
