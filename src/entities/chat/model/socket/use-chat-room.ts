import { useEffect } from "react";
import type { ChatOpenDto } from "../../api";
import { useOpenCurrentChat } from "../hooks";
import { getSocket, socketEvent, socketService } from "@/shared/socket";

export function useChatRoom() {
  const { chatId } = useOpenCurrentChat();

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
