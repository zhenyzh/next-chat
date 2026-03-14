import { useQuery } from "@tanstack/react-query";
import { chatsApi } from "@/entities/chats/api";
import type { ChatOpenDto } from "@/entities/chats/api";
import { queryClient } from "@/shared/query-client";

export function useChatsOpenCacheQuery() {
  const queryKey = [chatsApi.baseKey];

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () => queryClient.getQueryData<ChatOpenDto>(queryKey),
    enabled: !!queryClient.getQueryData(queryKey),
  });

  return {
    chatId: data?.chatId,
    isLoading,
  };
}
