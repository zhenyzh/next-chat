import { useMessages } from "./use-messages";
import { useSubscribeNewMessage } from "@/features/send-message/model/socket";
import { useSubscribeTyping } from "@/features/typing/model/socket";
import { useSubscribeStatusMessage } from "@/features/status-message/model/socket";
import { useChatConnection } from "@/entities/chat/model/socket";

export function useChatMessage() {
  useChatConnection();
  useSubscribeNewMessage();
  useSubscribeTyping();
  useSubscribeStatusMessage();

  const { messages, hasChatId, isLoading } = useMessages();

  return {
    messages,
    hasChatId,
    isLoading,
  };
}
