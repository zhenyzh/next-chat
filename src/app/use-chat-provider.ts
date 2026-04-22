import { useSubscribeToNewMessage } from "@/features/send-message/model/socket";
import { useSubscribeToTyping } from "@/features/typing/model/socket";
import {
  useMarkReadMessage,
  useSubscribeToAllReadMessage,
  useSubscribeToStatusMessage,
} from "@/features/status-message/model/socket";
import { useSubscribeToChatUsersRecipientUpdate } from "@/entities/user/users-recipient/model/socket";
import { useChatRoom } from "@/entities/chat/model/socket";

export function useChatProvider() {
  useChatRoom();
  useMarkReadMessage();
  useSubscribeToTyping();
  useSubscribeToNewMessage();
  useSubscribeToStatusMessage();
  useSubscribeToAllReadMessage();
  useSubscribeToChatUsersRecipientUpdate();
}
