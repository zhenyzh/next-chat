import { useMutation } from "@tanstack/react-query";
import { chatApi } from "@/entities/chat/api";
import { queryClient } from "@/shared/api";

export function useOpenChat() {
  const mutation = useMutation({
    mutationFn: chatApi.chatOpen,
    onSuccess: (data, { recipientId }) => {
      queryClient.setQueryData([chatApi.baseKey, recipientId], data);
    },
  });

  const handleChatOpen = (recipientId: number) => {
    mutation.mutate({ recipientId });
  };

  return {
    handleChatOpen,
  };
}
