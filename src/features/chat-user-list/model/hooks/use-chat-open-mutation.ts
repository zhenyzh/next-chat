import { useMutation, useQuery } from "@tanstack/react-query";
import { chatUserApi } from "@/features/chat-user-list/api";
import type { ChatOpenDto } from "@/features/chat-user-list/dto";
import { queryClient } from "@/shared/query-client";

export function useChatOpenMutation() {
  const queryKey = [chatUserApi.baseKey];

  const mutation = useMutation({
    mutationFn: chatUserApi.chatOpen,
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
