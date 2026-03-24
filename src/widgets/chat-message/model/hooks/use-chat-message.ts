import { useGetMessagesQuery } from "./use-get-messages-query";
import { useSubscribeNewMessageSocket } from "@/features/send-message/model/hooks";
import { useSocketTyping } from "@/features/typing/model/hooks";
import { useSocketChat } from "@/entities/chats/model/hooks";

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
