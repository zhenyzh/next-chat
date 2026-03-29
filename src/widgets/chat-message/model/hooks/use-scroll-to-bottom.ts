import { useEffect, useRef } from "react";
import { useMessages } from "./use-messages";
import { useTypingUsersIds } from "@/features/typing/model/store";
import { useOpenCurrentChat } from "@/entities/chat/model/hooks";
import { useBottomObserver } from "@/shared/hooks";

export function useScrollToBottom() {
  const { messages } = useMessages();
  const { chatId } = useOpenCurrentChat();
  const typingUsersIds = useTypingUsersIds();
  const { ref: refWatchBottom, isBottom } = useBottomObserver();

  const scrollRef = useRef<HTMLDivElement>(null);
  const lastMessageIdRef = useRef<number | null>(null);

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
    lastMessageIdRef.current = null;
  }, [chatId]);

  useEffect(() => {
    if (!messages.length) return;

    const lastGroup = messages[messages.length - 1].messages;
    const lastMessage = lastGroup[lastGroup.length - 1];

    if (lastMessageIdRef.current === lastMessage.id) return;
    lastMessageIdRef.current = lastMessage.id;

    const isLastFromMe = lastMessage.fromMe;

    if (isLastFromMe || isBottom) {
      scrollToBottom();
    }
  }, [messages, isBottom]);

  // находимся в конце, под скроллим новые сообщения
  useEffect(() => {
    if (isBottom) {
      scrollToBottom();
    }
  }, [typingUsersIds, isBottom]);

  return { scrollRef, refWatchBottom, isBottom, scrollToBottom };
}
