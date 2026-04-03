import type { QueryKey } from "@tanstack/react-query";
import type { ChatUsersDto } from "@/features/chat-users/api";
import type { MessagesDto } from "@/entities/messages/api";
import type { User } from "@/entities/user/model/types";
import { queryClient } from "@/shared/api";

export function updateUserCache(queryKey: QueryKey, avatarUrl: string) {
  queryClient.setQueryData<User>(queryKey, (old) =>
    old ? { ...old, avatarUrl } : old,
  );
}

export function updateChatUsersCache(
  queryKey: QueryKey,
  avatarUrl: string,
  senderId: number | undefined,
) {
  queryClient.setQueryData<ChatUsersDto[]>(queryKey, (old) => {
    if (!old || !senderId) return old;
    return old.map((item) =>
      item.id === senderId ? { ...item, avatarUrl } : item,
    );
  });
}

export function updateMessagesCache(
  queryKey: QueryKey,
  avatarUrl: string,
  senderId: number | undefined,
) {
  queryClient.setQueryData<MessagesDto[]>(queryKey, (old) => {
    if (!old || !senderId) return old;
    return old.map((msg) =>
      msg.senderId === senderId
        ? {
            ...msg,
            sender: { ...msg.sender, avatarUrl },
          }
        : msg,
    );
  });
}
