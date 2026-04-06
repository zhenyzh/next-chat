import { useQuery } from "@tanstack/react-query";
import { chatRecipientApi } from "../../api";
import { useSearchQueryParams } from "@/shared/hooks";

export function useChatRecipient() {
  const {
    query: { recipientId: id },
  } = useSearchQueryParams();

  const recipientId = Number(id);

  const { data: recipientData, isLoading } = useQuery({
    ...chatRecipientApi.getChatRecipientQueryOptions(recipientId),
    enabled: !!recipientId,
  });

  return {
    recipientId,
    recipientData,
    isLoading,
  };
}
