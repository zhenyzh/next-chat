import { queryOptions } from "@tanstack/react-query";
import type { ChatRecipientDto } from "./chat-recipient.dto";
import { jsonApiInstance } from "@/shared/api";

export const chatRecipientApi = {
  baseKey: "chatRecipientApi",
  getChatRecipientQueryOptions: (id: number) => {
    return queryOptions({
      queryKey: [chatRecipientApi.baseKey, id],
      queryFn: (meta) =>
        jsonApiInstance<ChatRecipientDto>(`users/user/${id}`, {
          signal: meta.signal,
        }),
    });
  },
};
