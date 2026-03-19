import { useEffect } from "react";
import type { ChatOpenDto } from "../../api";
import { useChatsOpenCacheQuery } from "./use-chats-open-cache-query";
import { getSocket, socketEvent, socketService } from "@/shared/socket";

export function useJoinChatWS() {
  const { chatId } = useChatsOpenCacheQuery();

  useEffect(() => {
    if (!chatId) return;
    const socket = getSocket();
    socket.emit(socketEvent.join_chat, chatId);

    const unsubscribe = socketService<ChatOpenDto>(
      socketEvent.join_chat_success,
      (chatId) => {
        console.log("connected chat", chatId);
      },
    );

    return () => unsubscribe();
  }, [chatId]);
}
