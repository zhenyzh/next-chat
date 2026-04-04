import { useSubscribeToNewMessage } from "@/features/send-message/model/socket";
import { useSubscribeToTyping } from "@/features/typing/model/socket";
import { useSubscribeToStatusMessage } from "@/features/status-message/model/socket";
import { useSubscribeToChatUsersUpdate } from "@/features/chat-users/model/socket";
import { useChatRoom } from "@/entities/chat/model/socket";

export function useChatMessageSubscribes(isBottom: boolean) {
  useChatRoom();
  useSubscribeToNewMessage();
  useSubscribeToTyping();
  useSubscribeToStatusMessage();
  useSubscribeToChatUsersUpdate(isBottom);
}
