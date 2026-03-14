import { queryOptions } from "@tanstack/react-query";
import type { ChatUserDto } from "./chat-user.dto";
import { jsonApiInstance } from "@/shared/api";

export const chatUserApi = {
  baseKey: "chatUser",

  getChatUsersAllQueryOptions: () => {
    return queryOptions({
      queryKey: [chatUserApi.baseKey, "list"],
      queryFn: (meta) =>
        jsonApiInstance<ChatUserDto[]>("users", { signal: meta.signal }),
    });
  },
};
