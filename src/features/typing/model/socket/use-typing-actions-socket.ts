import { useRef } from "react";
import { useUser } from "@/entities/user/model/store";
import { useChatOpenCacheQuery } from "@/entities/chat/model/hooks";
import { getSocket, socketEvent } from "@/shared/socket";

export function useTypingActionsSocket(delay: number = 2000) {
  const { chatId } = useChatOpenCacheQuery();
  const { id: userId } = useUser();

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
