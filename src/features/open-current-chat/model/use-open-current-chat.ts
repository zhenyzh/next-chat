import { useMutation } from "@tanstack/react-query";
import { chatApi } from "@/entities/chat/api";

export function useOpenCurrentChat() {
  const mutation = useMutation({
    mutationFn: chatApi.chatOpen,
  });

  const handleChatOpen = (recipientId: number) => {
    mutation.mutate({ recipientId });
  };

  return {
    handleChatOpen,
  };
}
