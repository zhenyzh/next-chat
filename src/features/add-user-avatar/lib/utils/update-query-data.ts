import { queryClient } from "@/shared/api";
import type { MessagesDto } from "@/entities/messages/api";
import type { User } from "@/entities/user/model/types";

export function updateUserData<T>(queryKey: T[], avatarUrl: string) {
  queryClient.setQueryData<User>(queryKey, (old) =>
    old ? { ...old, avatarUrl } : old,
  );
}

export function updateMessagesData<T>(
  queryKey: T[],
  avatarUrl: string,
  senderId?: number,
) {
  queryClient.setQueryData<MessagesDto[]>(queryKey, (old) =>
    (old ?? [])?.map((msg) =>
      msg.senderId === senderId
        ? {
            ...msg,
            sender: { ...msg.sender, avatarUrl },
          }
        : msg,
    ),
  );
}
