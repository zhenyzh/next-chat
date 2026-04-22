import { useEffect } from "react";

import { useSubscribeToChatUsersUpdate } from "@/widgets/chat-users/model/socket";
import { useSubscribeToNewMessage } from "@/features/send-message/model/socket";
import { useSubscribeToTyping } from "@/features/typing/model/socket";
import {
  useMarkReadMessage,
  useSubscribeToAllReadMessage,
  useSubscribeToStatusMessage,
} from "@/features/status-message/model/socket";
import { useSubscribeToUsersStatus } from "@/features/users-status/model/socket";
import { useSubscribeToUserAvatarUpdate } from "@/features/add-user-avatar/model/socket";
import { useChatRoom } from "@/entities/chat/model/socket";
import { getSocket } from "@/shared/socket";

export function useChatSocketProvider() {
  useEffect(() => {
    const socket = getSocket();
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  useChatRoom();
  useMarkReadMessage();
  useSubscribeToTyping();
  useSubscribeToNewMessage();
  useSubscribeToUsersStatus();
  useSubscribeToStatusMessage();
  useSubscribeToAllReadMessage();
  useSubscribeToUserAvatarUpdate();
  useSubscribeToChatUsersUpdate();
}
