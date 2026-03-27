import { useEffect } from "react";
import { messagesApi } from "@/entities/messages/api";
import { useChatOpenCacheQuery } from "@/entities/chat/model/hooks";
import { queryClient } from "@/shared/query-client";
import { socketEvent, socketService } from "@/shared/socket";

export function useSubscribeStatusMessageSocket() {
  const { chatId } = useChatOpenCacheQuery();

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
