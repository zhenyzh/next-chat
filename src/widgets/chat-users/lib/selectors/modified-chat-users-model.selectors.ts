import type { ChatUsersDto } from "@/widgets/chat-users/api";
import type { ChatUsers } from "@/widgets/chat-users/model/types";

export function modifiedChatUsersModel(
  data: ChatUsersDto[] | undefined,
): ChatUsers[] {
  return (data ?? []).map(({ isSent, isDelivered, isRead, ...rest }) => ({
    ...rest,
    status: {
      isSent,
      isDelivered,
      isRead,
    },
  }));
}
