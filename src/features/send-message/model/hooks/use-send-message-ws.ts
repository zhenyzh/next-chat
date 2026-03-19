import { useEffect } from "react";
import { messagesApi, type MessagesDto } from "@/entities/messages/api";
import { useChatsOpenCacheQuery } from "@/entities/chats/model/hooks";
import { socketEvent, socketService } from "@/shared/socket";
import { queryClient } from "@/shared/query-client";

export function useSendMessageWS() {
  const { chatId } = useChatsOpenCacheQuery();

  const queryKey = messagesApi.getMessageQueryOptions({ chatId }).queryKey;

  useEffect(() => {
    if (!chatId) return;

    const unsubscribe = socketService<MessagesDto>(
      socketEvent.chat_message_new,
      (message) => {
        if (message.chatId !== chatId) return;

        queryClient.setQueryData(queryKey, (old = []) => {
          if (old.some((msg) => msg.id === message.id)) return old;
          return [...old, message];
        });
      },
    );

    return () => {
      unsubscribe();
    };
  }, [chatId]);
}
