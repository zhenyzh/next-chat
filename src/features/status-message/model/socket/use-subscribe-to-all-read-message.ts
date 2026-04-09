import { useEffect } from "react";
import { updateAllMessageToReadCache } from "../../lib/utils";
import { messagesApi } from "@/entities/messages/api";
import { useOpenCurrentChat } from "@/entities/chat/model/hooks";
import { socketEvent, socketService } from "@/shared/socket";

export function useSubscribeToAllReadMessage() {
  const { chatId } = useOpenCurrentChat();

  const queryKey = messagesApi.getMessageQueryOptions({ chatId }).queryKey;

  useEffect(() => {
    const unsubscribe = socketService<{ chatId: number; userId: number }>(
      socketEvent.chat_read,
      ({ userId }) => {
        updateAllMessageToReadCache(queryKey, userId);
      },
    );

    return () => unsubscribe();
  }, [chatId, queryKey]);
}
