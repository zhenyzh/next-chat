import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export function getSocket() {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_APP_SOCKET_URL, {
      transports: ["websocket"],
    });

    socket.on("connect", () => console.log("Connected socket"));
    socket.on("disconnect", () => console.log("Disconnected socket"));
  }

  return socket;
}
