import { useEffect } from "react";
import { messagesApi, type MessagesDto } from "@/entities/messages/api";
import { useCurrentChat } from "@/entities/chat/model/hooks";
import { socketEvent, socketService } from "@/shared/socket";
import { queryClient } from "@/shared/api";

export function useSubscribeToNewMessage() {
  const { chatId } = useCurrentChat();

  const queryKey = messagesApi.getMessageQueryOptions({ chatId }).queryKey;

  useEffect(() => {
    if (!chatId) return;

    const unsubscribe = socketService<MessagesDto>(
      socketEvent.chat_message_new,
      (message) => {
        if (message.chatId !== chatId) return;

        queryClient.setQueryData(queryKey, (old = []) => {
          const isDuplicate = old.some(
            (msg) => msg.clientId === message.clientId,
          );
          return isDuplicate ? old : [...old, message];
        });
      },
    );

    return () => unsubscribe();
  }, [chatId, queryKey]);
}
