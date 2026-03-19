import { useGetMessagesQuery } from "./use-get-messages-query";
import { useSubscribeNewMessageWs } from "./use-subscribe-new-message-ws";
import { useSocketChat } from "@/entities/chats/model/hooks";

export function useGetMessages() {
  useSocketChat();
  useSubscribeNewMessageWs();

  const { messages, hasChatId, isLoading } = useGetMessagesQuery();

  return {
    messages,
    hasChatId,
    isLoading,
  };
}
