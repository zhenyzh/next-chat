import { useEffect } from "react";
import type { ChatOpenDto } from "../../api";
import { useChatOpenCacheQuery } from "./use-chat-open-cache-query";
import { getSocket, socketEvent, socketService } from "@/shared/socket";

export function useSocketChat() {
  const { chatId } = useChatOpenCacheQuery();

  useEffect(() => {
    if (!chatId) return;
    const socket = getSocket();
    socket.emit(socketEvent.join_chat, chatId);

    const unsubscribes = [
      socketService<ChatOpenDto>(socketEvent.join_chat_success, () => {}),
      socketService<ChatOpenDto>(socketEvent.leave_chat_success, () => {}),
    ];

    return () => {
      socket.emit(socketEvent.leave_chat, chatId);
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    };
  }, [chatId]);
}
