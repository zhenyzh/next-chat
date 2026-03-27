import { useQuery } from "@tanstack/react-query";
import { chatApi } from "@/entities/chat/api";
import type { ChatOpenDto } from "@/entities/chat/api";
import { queryClient } from "@/shared/api";

export function useChatOpenCacheQuery() {
  const queryKey = [chatApi.baseKey];

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
