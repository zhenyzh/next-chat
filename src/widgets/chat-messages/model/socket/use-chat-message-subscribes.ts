import { useSubscribeNewMessage } from "@/features/send-message/model/socket";
import { useSubscribeTyping } from "@/features/typing/model/socket";
import { useSubscribeStatusMessage } from "@/features/status-message/model/socket";
import { useSubscribeUpdateChatUsers } from "@/features/chat-users/model/socket";
import { useChatConnection } from "@/entities/chat/model/socket";

export function useChatMessageSubscribes(isBottom: boolean) {
  useChatConnection();
  useSubscribeNewMessage();
  useSubscribeTyping();
  useSubscribeStatusMessage();
  useSubscribeUpdateChatUsers(isBottom);
}
