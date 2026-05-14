import { queryOptions } from "@tanstack/react-query";
import type { ChatOpenDto } from "./chat.dto";
import { apiInstance } from "@/shared/api";

export const chatApi = {
  baseKey: "chat",
  getCurrentChatOpenQueryOptions: ({
    recipientId,
  }: {
    recipientId: number | string;
  }) => {
    return queryOptions({
      queryKey: [chatApi.baseKey, recipientId],
      queryFn: (meta) =>
        apiInstance<ChatOpenDto>(`chats/current/${recipientId}`, {
          signal: meta.signal,
        }),
    });
  },
  chatOpen: ({ recipientId }: { recipientId: number }) => {
    return apiInstance<ChatOpenDto>("chats/open", {
      method: "POST",
      data: {
        recipientId,
      },
    });
  },
};
