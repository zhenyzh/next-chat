import { useEffect } from "react";
import { useOpenCurrentChat } from "@/entities/chat/model/hooks";
import { useUser } from "@/entities/user/model/store";
import { getSocket, socketEvent } from "@/shared/socket";

export function useMarkReadMessage() {
  const { chatId } = useOpenCurrentChat();
  const { id: userId } = useUser();

  useEffect(() => {
    if (!chatId) return;
    getSocket().emit(socketEvent.chat_read, { chatId, userId });
  }, [chatId, userId]);
}
