import { useEffect } from "react";
import {
  updateChatUsersCache,
  updateMessagesCache,
  updateUserCache,
} from "../../lib/utils";
import { chatUsersApi } from "@/widgets/chat-users/api";
import { chatRecipientApi } from "@/features/chat-recipient/api";
import { useCurrentChat } from "@/entities/chat/model/hooks";
import { messagesApi } from "@/entities/messages/api";
import { socketEvent, socketService } from "@/shared/socket";
import { useSearchQueryParams } from "@/shared/hooks";

export function useSubscribeToUserAvatarUpdate() {
  const { chatId } = useCurrentChat();
  const {
    query: { recipientId },
  } = useSearchQueryParams();

  const queryKeyChatUsers = chatUsersApi.getChatUsersAllQueryOptions().queryKey;
  const queryKeyRecipient =
    chatRecipientApi.getChatRecipientQueryOptions(+recipientId).queryKey;
  const queryKeyMessages = messagesApi.getMessageQueryOptions({
    chatId,
  }).queryKey;

  useEffect(() => {
    const unsubscribe = socketService<{ userId: number; avatarUrl: string }>(
      socketEvent.user_avatar_updated,
      ({ userId, avatarUrl }) => {
        updateChatUsersCache(queryKeyChatUsers, avatarUrl, userId);
        if (userId === +recipientId) {
          updateUserCache(queryKeyRecipient, avatarUrl);
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
    queryKeyRecipient,
    queryKeyMessages,
  ]);
}
