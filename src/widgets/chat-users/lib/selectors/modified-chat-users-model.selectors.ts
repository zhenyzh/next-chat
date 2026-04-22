import { ChatUsersDto } from "@/entities/chat-user/api";
import type { ChatUsers } from "@/entities/chat-user/model/types";

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
