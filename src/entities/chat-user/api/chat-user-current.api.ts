import { queryOptions } from "@tanstack/react-query";
import type { ChatUserCurrentDto } from "./chat-user-current.dto";
import { apiInstance } from "@/shared/api";

export const chatUserCurrentApi = {
  baseKey: "chatUserCurrent",
  getChatUserCurrentQueryOptions: (id: number) => {
    return queryOptions({
      queryKey: [chatUserCurrentApi.baseKey, id],
      queryFn: (meta) =>
        apiInstance<ChatUserCurrentDto>(`users/user/${id}`, {
          signal: meta.signal,
        }),
    });
  },
};
