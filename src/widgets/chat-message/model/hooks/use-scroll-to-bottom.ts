import { useEffect, useRef } from "react";
import { useGetMessages } from "./use-get-messages";
import { useChatsOpenCacheQuery } from "@/entities/chats/model/hooks";
import { useBottomObserver } from "@/shared/hooks";

export function useScrollToBottom() {
  const { messages } = useGetMessages();
  const { chatId } = useChatsOpenCacheQuery();
  const { ref: refWatchBottom, isBottom } = useBottomObserver({
    dependencies: [messages.length, chatId],
  });

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = true;
  }, [chatId]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !messages.length) return;

    if (isFirstRender.current) {
      el.scrollTop = el.scrollHeight;
      isFirstRender.current = false;
      return;
    }

    const lastGroup = messages[messages.length - 1].messages;
    const lastMessage = lastGroup[lastGroup.length - 1];

    const isMe = lastMessage.fromMe;

    if (isMe || isBottom) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, isBottom, chatId]);

  return { scrollRef, refWatchBottom, isBottom };
}
