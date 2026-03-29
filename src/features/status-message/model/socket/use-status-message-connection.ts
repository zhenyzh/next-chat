import { getSocket, socketEvent } from "@/shared/socket";

export function useStatusMessageConnection() {
  const socket = getSocket();

  const markAsDelivered = (messageId: number, chatId: number | undefined) => {
    socket.emit(socketEvent.message_delivered, { messageId, chatId });
  };

  const markAsRead = (messageId: number, chatId?: number | undefined) => {
    socket.emit(socketEvent.message_read, { messageId, chatId });
  };

  return { markAsDelivered, markAsRead };
}
