import { useEffect, useRef } from "react";
import { useChatMessage } from "./use-chat-message";
import { useTypingUsersIds } from "@/features/typing/model/store";
import { useChatOpenCacheQuery } from "@/entities/chat/model/hooks";
import { useBottomObserver } from "@/shared/hooks";

export function useScrollToBottom() {
  const { messages } = useChatMessage();
  const { chatId } = useChatOpenCacheQuery();
  const typingUsersIds = useTypingUsersIds();

  const { ref: refWatchBottom, isBottom } = useBottomObserver({
    dependencies: [messages.length, typingUsersIds.length, chatId],
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = true;
  }, [chatId]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (isFirstRender.current) {
      el.scrollTop = el.scrollHeight;
      isFirstRender.current = false;
      return;
    }

    if (!messages.length) return;

    const lastGroup = messages[messages.length - 1].messages;
    const lastMessage = lastGroup[lastGroup.length - 1];

    const isMe = lastMessage.fromMe;

    if (isMe || isBottom) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, typingUsersIds, isBottom, chatId]);

  return { scrollRef, refWatchBottom, isBottom };
}
