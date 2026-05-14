import { queryOptions } from "@tanstack/react-query";
import type { MessagesDto } from "./messages.dto";
import { apiInstance } from "@/shared/api";

export const messagesApi = {
  baseKey: "messages",
  getMessageQueryOptions: ({ chatId }: { chatId: number | undefined }) => {
    return queryOptions({
      queryKey: [messagesApi.baseKey, "list", chatId],
      queryFn: (meta) =>
        apiInstance<MessagesDto[]>(`messages/${chatId}`, {
          signal: meta.signal,
        }),
    });
  },
};
