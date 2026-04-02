import type { MessagesDto } from "@/entities/messages/api";
import type { User } from "@/entities/user/model/types";
import { queryClient } from "@/shared/api";

export function updateUserData<K>(queryKey: K[], avatarUrl: string) {
  queryClient.setQueryData<User>(queryKey, (old) =>
    old ? { ...old, avatarUrl } : old,
  );
}

export function updateMessagesData<K>(
  queryKey: K[],
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
