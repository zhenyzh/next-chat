import { useMutation } from "@tanstack/react-query";
import { chatApi } from "@/entities/chat/api";
import { useSearchQueryParams } from "@/shared/hooks";
import { queryClient } from "@/shared/api";

export function useOpenChat() {
  const {
    query: { recipientId },
  } = useSearchQueryParams();

  const queryKey = [chatApi.baseKey, recipientId];

  const mutation = useMutation({
    mutationFn: chatApi.chatOpen,

    async onSettled() {
      queryClient.invalidateQueries({ queryKey });
    },

    async onSuccess(data) {
      queryClient.setQueryData(queryKey, data);
    },
  });

  const handleChatOpen = (recipientId: number) => {
    mutation.mutate({ recipientId });
  };

  return {
    handleChatOpen,
  };
}
