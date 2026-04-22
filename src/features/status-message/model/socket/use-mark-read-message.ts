import { useEffect } from "react";
import { useCurrentChat } from "@/entities/chat/model/hooks";
import { useUser } from "@/entities/user/user/model/store";
import { getSocket, socketEvent } from "@/shared/socket";

export function useMarkReadMessage() {
  const { chatId } = useCurrentChat();
  const { id: userId } = useUser();

  useEffect(() => {
    if (!chatId) return;
    getSocket().emit(socketEvent.chat_read, { chatId, userId });
  }, [chatId, userId]);
}
