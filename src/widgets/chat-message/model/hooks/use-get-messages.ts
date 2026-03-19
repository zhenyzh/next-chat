import { useGetMessagesQuery } from "./use-get-messages-query";
import { useSendMessageWS } from "@/features/send-message/model/hooks";
import { useJoinChatWS } from "@/entities/chats/model/hooks";

export function useGetMessages() {
  useJoinChatWS();
  useSendMessageWS();

  const { messages, hasChatId, isLoading } = useGetMessagesQuery();

  return {
    messages,
    hasChatId,
    isLoading,
  };
}
