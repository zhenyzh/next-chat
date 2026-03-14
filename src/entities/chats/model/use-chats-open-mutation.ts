import { useMutation, useQuery } from "@tanstack/react-query";
import { chatsApi } from "@/entities/chats/api";
import type { ChatOpenDto } from "@/entities/chats/dto";
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

  const { data } = useQuery({
    queryKey,
    queryFn: () => queryClient.getQueryData<ChatOpenDto>(queryKey),
    enabled: !!queryClient.getQueryData(queryKey),
  });

  return {
    handleChatOpen,
    chatId: data?.chatId,
  };
}
