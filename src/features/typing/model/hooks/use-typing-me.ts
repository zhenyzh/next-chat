import { useTypingUsersIds } from "../store";
import { useSearchQueryParams } from "@/shared/hooks";

export function useTypingMe() {
  const {
    query: { recipientId },
  } = useSearchQueryParams();

  const typingUsersIds = useTypingUsersIds();

  return {
    isTyping: typingUsersIds.includes(+recipientId),
  };
}
