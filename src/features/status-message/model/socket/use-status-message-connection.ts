import { getSocket, socketEvent } from "@/shared/socket";

type MarkAsMessage = {
  messageId: number;
  chatId: number | undefined;
};

export function useStatusMessageConnection() {
  const socket = getSocket();

  const markAsDelivered = ({ messageId, chatId }: MarkAsMessage) => {
    socket.emit(socketEvent.message_delivered, { messageId, chatId });
  };

  const markAsRead = ({ messageId, chatId }: MarkAsMessage) => {
    socket.emit(socketEvent.message_read, { messageId, chatId });
  };

  return { markAsDelivered, markAsRead };
}
