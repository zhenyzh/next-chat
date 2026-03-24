import { useRef } from "react";
import { useGetUserQuery } from "@/entities/user/model/hooks";
import { useChatsOpenCacheQuery } from "@/entities/chats/model/hooks";
import { getSocket, socketEvent } from "@/shared/socket";

export function useTypingActionsWS(delay: number = 2000) {
  const { chatId } = useChatsOpenCacheQuery();
  const { user: { id: userId } = {} } = useGetUserQuery();

  const socket = getSocket();
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const getData = () => {
    if (!chatId || !userId) return;
    return { chatId, userId };
  };

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const sendTyping = () => {
    const data = getData();
    if (!data) return;

    socket.emit(socketEvent.typing, data);

    clearTimer();

    timeoutRef.current = setTimeout(() => {
      socket.emit(socketEvent.stop_typing, data);
    }, delay);
  };

  const stopTyping = () => {
    const data = getData();
    if (!data) return;

    socket.emit(socketEvent.stop_typing, { chatId, userId });

    clearTimer();
  };

  return { sendTyping, stopTyping };
}
