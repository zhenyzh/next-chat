import { queryOptions } from "@tanstack/react-query";
import type { ChatUsersDto } from "./chat-users.dto";
import { jsonApiInstance } from "@/shared/api";

export const chatUsersApi = {
  baseKey: "chatUser",

  getChatUsersAllQueryOptions: () => {
    return queryOptions({
      queryKey: [chatUsersApi.baseKey, "list"],
      queryFn: (meta) =>
        jsonApiInstance<ChatUsersDto[]>("users", { signal: meta.signal }),
    });
  },
};
