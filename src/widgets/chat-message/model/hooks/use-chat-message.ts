import { useGetMessagesQuery } from "./use-get-messages-query";
import { useSubscribeNewMessageWS } from "@/features/send-message/model/hooks";
import { useTypingConnectionWS } from "@/features/typing/model/hooks";
import { useSocketChat } from "@/entities/chats/model/hooks";

export function useChatMessage() {
  useSocketChat();
  useSubscribeNewMessageWS();
  useTypingConnectionWS();

  const { messages, hasChatId, isLoading } = useGetMessagesQuery();

  return {
    messages,
    hasChatId,
    isLoading,
  };
}
