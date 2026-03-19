import { useGetMessagesQuery } from "./use-get-messages-query";
import { useSendMessageWs } from "@/features/send-message/model/hooks";
import { useJoinChatWS } from "@/entities/chats/model/hooks";

export function useGetMessages() {
  useJoinChatWS();
  useSendMessageWs();

  const { messages, hasChatId, isLoading } = useGetMessagesQuery();

  return {
    messages,
    hasChatId,
    isLoading,
  };
}
