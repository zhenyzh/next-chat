import { queryOptions } from "@tanstack/react-query";
import type { MessagesDto } from "../dto";
import { jsonApiInstance } from "@/shared/api";

export const chatMessageApi = {
  baseKey: "chatMessage",
  getMessageQueryOptions: ({ chatId }: { chatId?: number }) => {
    return queryOptions({
      queryKey: [chatMessageApi.baseKey, "list", chatId],
      queryFn: (meta) =>
        jsonApiInstance<MessagesDto[]>(`messages/${chatId}`, {
          signal: meta.signal,
        }),
    });
  },
};
