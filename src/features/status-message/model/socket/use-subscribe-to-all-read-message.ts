import { useEffect } from "react";
import { updateAllMessageToReadCache } from "../../lib/utils";
import { messagesApi } from "@/entities/messages/api";
import { useCurrentChat } from "@/entities/chat/model/hooks";
import { socketEvent, socketService } from "@/shared/socket";
import { queryClient } from "@/shared/api";

export function useSubscribeToAllReadMessage() {
  const { chatId } = useCurrentChat();

  const queryKey = messagesApi.getMessageQueryOptions({ chatId }).queryKey;

  useEffect(() => {
    if (!chatId) return;

    void queryClient.invalidateQueries({ queryKey });

    const unsubscribe = socketService<{ chatId: number; userId: number }>(
      socketEvent.chat_read,
      ({ chatId: chatIdSocket, userId: readerId }) => {
        if (chatId !== chatIdSocket) return;
        updateAllMessageToReadCache(queryKey, chatIdSocket, readerId);
      },
    );

    return () => unsubscribe();
  }, [chatId, queryKey]);
}
