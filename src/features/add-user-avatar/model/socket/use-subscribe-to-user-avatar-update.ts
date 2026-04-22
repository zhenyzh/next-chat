import { useEffect } from "react";
import {
  updateChatUsersCache,
  updateMessagesCache,
  updateUserCache,
} from "../../lib/utils";
import { usersRecipientApi } from "@/entities/user/users-recipient/api";
import { userRecipientApi } from "@/entities/user/user-recipient/api";
import { useCurrentChat } from "@/entities/chat/model/hooks";
import { messagesApi } from "@/entities/messages/api";
import { socketEvent, socketService } from "@/shared/socket";
import { useSearchQueryParams } from "@/shared/hooks";

export function useSubscribeToUserAvatarUpdate() {
  const { chatId } = useCurrentChat();
  const {
    query: { recipientId },
  } = useSearchQueryParams();

  const queryKeyChatUsers =
    usersRecipientApi.getChatUsersAllQueryOptions().queryKey;
  const queryKeyUserRecipient =
    userRecipientApi.getChatRecipientQueryOptions(+recipientId).queryKey;
  const queryKeyMessages = messagesApi.getMessageQueryOptions({
    chatId,
  }).queryKey;

  useEffect(() => {
    const unsubscribe = socketService<{ userId: number; avatarUrl: string }>(
      socketEvent.user_avatar_updated,
      ({ userId, avatarUrl }) => {
        updateChatUsersCache(queryKeyChatUsers, avatarUrl, userId);
        if (userId === +recipientId) {
          updateUserCache(queryKeyUserRecipient, avatarUrl);
        }
        if (chatId) {
          updateMessagesCache(queryKeyMessages, avatarUrl, userId);
        }
      },
    );
    return () => unsubscribe();
  }, [
    chatId,
    recipientId,
    queryKeyChatUsers,
    queryKeyUserRecipient,
    queryKeyMessages,
  ]);
}
