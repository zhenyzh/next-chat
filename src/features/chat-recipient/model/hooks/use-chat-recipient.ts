import { useQuery } from "@tanstack/react-query";
import { chatRecipientApi } from "../../api";

export function useChatRecipient() {
  const { data: recipient, isLoading } = useQuery({
    ...chatRecipientApi.getChatRecipientQueryOptions(4),
  });

  return {
    recipient,
    isLoading,
  };
}
