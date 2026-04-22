import { useEffect } from "react";
import { useCurrentChat } from "@/entities/chat/model/hooks";
import { useUserLogin } from "@/entities/user/user-login/model/store";
import { getSocket, socketEvent } from "@/shared/socket";

export function useMarkReadMessage() {
  const { chatId } = useCurrentChat();
  const { id: userId } = useUserLogin();

  useEffect(() => {
    if (!chatId) return;
    getSocket().emit(socketEvent.chat_read, { chatId, userId });
  }, [chatId, userId]);
}
