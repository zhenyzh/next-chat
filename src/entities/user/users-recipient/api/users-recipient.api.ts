import { queryOptions } from "@tanstack/react-query";
import type { UsersRecipientDto } from "./users-recipient.dto";
import { jsonApiInstance } from "@/shared/api";

export const usersRecipientApi = {
  baseKey: "chatUser",

  getChatUsersAllQueryOptions: (search?: string) => {
    return queryOptions({
      queryKey: [usersRecipientApi.baseKey, "list", search],
      queryFn: (meta) =>
        jsonApiInstance<UsersRecipientDto[]>(`chat-users`, {
          signal: meta.signal,
          params: { search },
        }),
    });
  },
};
