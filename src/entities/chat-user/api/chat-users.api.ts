import { queryOptions } from "@tanstack/react-query";
import type { ChatUsersDto } from "./chat-users.dto";
import { jsonApiInstance } from "@/shared/api";

export const chatUsersApi = {
  baseKey: "chatUsers",

  getChatUsersAllQueryOptions: (search?: string) => {
    return queryOptions({
      queryKey: [chatUsersApi.baseKey, "list", search],
      queryFn: (meta) =>
        jsonApiInstance<ChatUsersDto[]>(`chat-users`, {
          signal: meta.signal,
          params: { search },
        }),
    });
  },
};
