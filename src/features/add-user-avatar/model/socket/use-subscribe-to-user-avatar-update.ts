import { useEffect } from "react";
import { updateChatUsersCache, updateMessagesCache } from "../../lib/utils";
import { chatUsersApi } from "@/features/chat-users/api";
import { useOpenCurrentChat } from "@/entities/chat/model/hooks";
import { messagesApi } from "@/entities/messages/api";
import { socketEvent, socketService } from "@/shared/socket";

export function useSubscribeToUserAvatarUpdate() {
  const { chatId } = useOpenCurrentChat();

  const queryKeyChatUsers = chatUsersApi.getChatUsersAllQueryOptions().queryKey;
  const queryKeyMessages = messagesApi.getMessageQueryOptions({
    chatId,
  }).queryKey;

  useEffect(() => {
    const unsubscribe = socketService<{ userId: number; avatarUrl: string }>(
      socketEvent.user_avatar_updated,
      ({ userId, avatarUrl }) => {
        updateChatUsersCache(queryKeyChatUsers, avatarUrl, userId);
        if (chatId) {
          updateMessagesCache(queryKeyMessages, avatarUrl, userId);
        }
      },
    );
    return () => unsubscribe();
  }, [chatId, queryKeyChatUsers, queryKeyMessages]);
}
