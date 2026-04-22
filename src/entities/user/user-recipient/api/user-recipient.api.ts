import { queryOptions } from "@tanstack/react-query";
import type { UserRecipientDto } from "./user-recipient.dto";
import { jsonApiInstance } from "@/shared/api";

export const userRecipientApi = {
  baseKey: "userRecipientApi",
  getChatRecipientQueryOptions: (id: number) => {
    return queryOptions({
      queryKey: [userRecipientApi.baseKey, id],
      queryFn: (meta) =>
        jsonApiInstance<UserRecipientDto>(`users/user/${id}`, {
          signal: meta.signal,
        }),
    });
  },
};
