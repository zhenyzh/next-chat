import { useGetMessagesQuery } from "./use-get-messages-query";
import { useSubscribeNewMessageSocket } from "@/features/send-message/model/socket";
import { useSubscribeTypingSocket } from "@/features/typing/model/socket";
import { useSubscribeStatusMessageSocket } from "@/features/status-message/model/socket";
import { useSocketChat } from "@/entities/chat/model/socket";

export function useChatMessage() {
  useSocketChat();
  useSubscribeNewMessageSocket();
  useSubscribeTypingSocket();
  useSubscribeStatusMessageSocket();

  const { messages, hasChatId, isLoading } = useGetMessagesQuery();

  return {
    messages,
    hasChatId,
    isLoading,
  };
}
