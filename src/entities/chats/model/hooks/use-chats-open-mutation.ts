import { useMutation } from "@tanstack/react-query";
import { chatsApi } from "@/entities/chats/api";
import { queryClient } from "@/shared/query-client";

export function useChatsOpenMutation() {
  const queryKey = [chatsApi.baseKey];

  const mutation = useMutation({
    mutationFn: chatsApi.chatOpen,
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
