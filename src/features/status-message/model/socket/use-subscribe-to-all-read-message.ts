import { useEffect } from "react";
import { updateAllMessageToReadCache } from "../../lib/utils";
import { messagesApi } from "@/entities/messages/api";
import { useOpenCurrentChat } from "@/entities/chat/model/hooks";
import { socketEvent, socketService } from "@/shared/socket";
import { queryClient } from "@/shared/api";

export function useSubscribeToAllReadMessage() {
  const { chatId } = useOpenCurrentChat();

  const queryKey = messagesApi.getMessageQueryOptions({ chatId }).queryKey;

  useEffect(() => {
    if (!chatId) return;

    queryClient.invalidateQueries({ queryKey });

    const unsubscribe = socketService<{ chatId: number; userId: number }>(
      socketEvent.chat_read,
      ({ chatId: eventChatId, userId: readerId }) => {
        if (chatId !== eventChatId) return;
        updateAllMessageToReadCache(queryKey, eventChatId, readerId);
      },
    );

    return () => unsubscribe();
  }, [chatId, queryKey]);
}
