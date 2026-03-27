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
    dependencies: [messages.length, chatId],
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatId]);

  useEffect(() => {
    if (!messages.length) return;

    const lastGroup = messages[messages.length - 1].messages;
    const isLastFromMe = lastGroup[lastGroup.length - 1].fromMe;

    if (isLastFromMe) {
      scrollToBottom();
    }
  }, [messages]);

  useEffect(() => {
    if (isBottom) {
      scrollToBottom();
    }
  }, [typingUsersIds.length, isBottom]);

  return { scrollRef, refWatchBottom, isBottom };
}
