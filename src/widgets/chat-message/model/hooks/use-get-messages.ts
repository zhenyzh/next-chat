import { useGetMessagesQuery } from "./use-get-messages-query";
import { useSendMessageWS } from "@/features/send-message/model/hooks";
import { useSocketChat } from "@/entities/chats/model/hooks";

export function useGetMessages() {
  useSocketChat();
  useSendMessageWS();

  const { messages, hasChatId, isLoading } = useGetMessagesQuery();

  return {
    messages,
    hasChatId,
    isLoading,
  };
}
