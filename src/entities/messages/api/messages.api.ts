import { queryOptions } from "@tanstack/react-query";
import type { MessagesDto } from "../dto";
import { jsonApiInstance } from "@/shared/api";

export const messagesApi = {
  baseKey: "messages",
  getMessageQueryOptions: ({ chatId }: { chatId: number | undefined }) => {
    return queryOptions({
      queryKey: [messagesApi.baseKey, "list", chatId],
      queryFn: (meta) =>
        jsonApiInstance<MessagesDto[]>(`messages/${chatId}`, {
          signal: meta.signal,
        }),
    });
  },
};
