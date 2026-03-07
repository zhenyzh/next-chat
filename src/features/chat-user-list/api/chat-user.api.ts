import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "@/shared/api";

type ChatUser = {
  id: string;
  name: string;
  email: string;
};

export const chatUserApi = {
  baseKey: "chatUser",
  getChatUsersAllQueryOptions: () => {
    return queryOptions({
      queryKey: [chatUserApi.baseKey, "list"],
      queryFn: (meta) =>
        jsonApiInstance<ChatUser[]>("users", { signal: meta.signal }),
      retry: false,
    });
  },
};
