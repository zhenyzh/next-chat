import { QueryKey } from "@tanstack/react-query";
import type { MessagesDto } from "@/entities/messages/api";
import { queryClient } from "@/shared/api";

export function updateStatusCache(
  queryKey: QueryKey,
  messageId: number,
  status: "isDelivered" | "isRead",
) {
  queryClient.setQueryData<MessagesDto[]>(queryKey, (old) => {
    if (!old) return old;
    return old.map((msg) =>
      msg.id === messageId ? { ...msg, [status]: true } : msg,
    );
  });
}
