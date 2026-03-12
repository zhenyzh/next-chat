import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "@/shared/api";
import type { ChatUserDto } from "@/features/chat-user-list/dto";

export const chatUserApi = {
  baseKey: "chatUser",
  getChatUsersAllQueryOptions: () => {
    return queryOptions({
      queryKey: [chatUserApi.baseKey, "list"],
      queryFn: (meta) =>
        jsonApiInstance<ChatUserDto[]>("users", { signal: meta.signal }),
      retry: false,
    });
  },
};
