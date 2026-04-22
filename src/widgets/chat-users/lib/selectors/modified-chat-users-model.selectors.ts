import type { UsersRecipientDto } from "@/entities/user/users-recipient/api";
import type { UsersRecipient } from "@/entities/user/users-recipient/model/types";

export function modifiedChatUsersModel(
  data: UsersRecipientDto[] | undefined,
): UsersRecipient[] {
  return (data ?? []).map(({ isSent, isDelivered, isRead, ...rest }) => ({
    ...rest,
    status: {
      isSent,
      isDelivered,
      isRead,
    },
  }));
}
