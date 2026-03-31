import { useUsersChatList } from "./use-users-chat-list";
import { useSubscribeChatUsers } from "../socket";

export function useUsersChat() {
  useSubscribeChatUsers();

  const { usersChat, isLoading } = useUsersChatList();
  return {
    usersChat,
    isLoading,
  };
}
