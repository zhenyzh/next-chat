import { useEffect } from "react";
import { updateStatusCache } from "../../lib/utils";
import { messagesApi } from "@/entities/messages/api";
import { useCurrentChat } from "@/entities/chat/model/hooks";
import { socketEvent, socketService } from "@/shared/socket";

export function useSubscribeToStatusMessage() {
  const { chatId } = useCurrentChat();

  const queryKey = messagesApi.getMessageQueryOptions({ chatId }).queryKey;

  useEffect(() => {
    const unsubscribes = [
      socketService<number>(socketEvent.message_delivered, (messageId) => {
        updateStatusCache(queryKey, messageId, "isDelivered");
      }),
      socketService<number>(socketEvent.message_read, (messageId) => {
        updateStatusCache(queryKey, messageId, "isRead");
      }),
    ];

    return () => {
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    };
  }, [chatId, queryKey]);
}
