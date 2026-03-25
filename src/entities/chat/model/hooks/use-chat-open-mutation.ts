import { useMutation } from "@tanstack/react-query";
import { chatApi } from "@/entities/chat/api";
import { queryClient } from "@/shared/query-client";

export function useChatOpenMutation() {
  const queryKey = [chatApi.baseKey];

  const mutation = useMutation({
    mutationFn: chatApi.chatOpen,
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, data);
    },
  });

  const handleChatOpen = (userIdOther: number) => {
    mutation.mutate({ userIdOther });
  };

  return {
    handleChatOpen,
  };
}
