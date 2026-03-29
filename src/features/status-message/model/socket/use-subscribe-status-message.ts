import { useEffect } from "react";
import { messagesApi } from "@/entities/messages/api";
import { useOpenCurrentChat } from "@/entities/chat/model/hooks";
import { queryClient } from "@/shared/api";
import { socketEvent, socketService } from "@/shared/socket";

export function useSubscribeStatusMessage() {
  const { chatId } = useOpenCurrentChat();

  const queryKey = messagesApi.getMessageQueryOptions({ chatId }).queryKey;

  useEffect(() => {
    if (!chatId) return;

    const unsubscribes = [
      socketService<number>(socketEvent.message_delivered, (messageId) => {
        queryClient.setQueryData(queryKey, (old) =>
          (old ?? []).map((msg) =>
            msg.id === messageId ? { ...msg, isDelivered: true } : msg,
          ),
        );
      }),
      socketService<number>(socketEvent.message_read, (messageId) => {
        queryClient.setQueryData(queryKey, (old) =>
          (old ?? []).map((msg) =>
            msg.id === messageId ? { ...msg, isRead: true } : msg,
          ),
        );
      }),
    ];

    return () => {
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    };
  }, [chatId, queryKey]);
}
