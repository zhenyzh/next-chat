import { useEffect } from "react";
import { getSocket } from "./get-socket";

export function useSocketConnect() {
  useEffect(() => {
    const socket = getSocket();
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);
}
