import { useTypingUsersIds } from "../store";

export function useTyping(userId: number) {
  const typingUsersIds = useTypingUsersIds();

  return {
    isTyping: typingUsersIds.includes(userId),
  };
}
