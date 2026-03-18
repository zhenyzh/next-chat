import { getSocket } from "./get-socket";
import type { SocketEvent } from "./socket-event";

export function socketService<T>(
  event: SocketEvent,
  callback: (data: T) => void,
) {
  const socket = getSocket();

  socket.on(event, callback);

  return () => {
    socket.off(event, callback);
  };
}
