import { useQuery } from "@tanstack/react-query";
import { userRecipientApi } from "@/entities/user/user-recipient/api";
import { useSearchQueryParams } from "@/shared/hooks";

export function useChatUserRecipient() {
  const {
    query: { recipientId: id },
  } = useSearchQueryParams();

  const recipientId = Number(id);

  const { data: recipientData, isLoading } = useQuery({
    ...userRecipientApi.getChatRecipientQueryOptions(recipientId),
    enabled: !!recipientId,
  });

  return {
    recipientId,
    recipientData,
    isLoading,
  };
}
