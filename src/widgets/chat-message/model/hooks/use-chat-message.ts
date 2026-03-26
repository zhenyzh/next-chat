import { useGetMessagesQuery } from "./use-get-messages-query";
import { useSubscribeNewMessageSocket } from "@/features/send-message/model/socket";
import { useSocketTyping } from "@/features/typing/model/socket";
import { useSocketChat } from "@/entities/chat/model/socket";

export function useChatMessage() {
  useSocketChat();
  useSubscribeNewMessageSocket();
  useSocketTyping();

  const { messages, hasChatId, isLoading } = useGetMessagesQuery();

  return {
    messages,
    hasChatId,
    isLoading,
  };
}
