import type { ChatUsersDto } from "@/features/chat-users/api";
import type { ChatUsers } from "@/features/chat-users/model/types";

export function modifiedChatUsers(
  data: ChatUsersDto[] | undefined,
): ChatUsers[] {
  return (
    data?.map(({ isSent, isDelivered, isRead, ...rest }) => ({
      ...rest,
      status: {
        isSent,
        isDelivered,
        isRead,
      },
    })) ?? []
  );
}
