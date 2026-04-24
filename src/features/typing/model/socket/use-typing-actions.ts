import { useRef } from "react";
import { useUser } from "@/entities/user/model/store";
import { getSocket, socketEvent } from "@/shared/socket";

export function useTypingActions(delay: number = 1000) {
  const { id: userId } = useUser();

  const socket = getSocket();
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const getData = () => {
    if (!userId) return;
    return { userId };
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

    socket.emit(socketEvent.stop_typing, { userId });

    clearTimer();
  };

  return { sendTyping, stopTyping };
}
