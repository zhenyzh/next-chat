import { useEffect, useRef } from "react";
import { useMessagesList } from "./use-messages-list";
import { useTypingUsersIds } from "@/features/typing/model/store";
import { useOpenCurrentChat } from "@/entities/chat/model/hooks";
import { useBottomObserver } from "@/shared/hooks";

export function useScrollToBottom() {
  const { messages } = useMessagesList();
  const { chatId } = useOpenCurrentChat();
  const typingUsersIds = useTypingUsersIds();
  const { ref: refWatchBottom, isBottom } = useBottomObserver();

  const scrollBarRef = useRef<HTMLDivElement>(null);
  const lastMessageIdRef = useRef<number | null>(null);

  const handleScrollToBottom = () => {
    const el = scrollBarRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  };

  useEffect(() => {
    handleScrollToBottom();
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
      handleScrollToBottom();
    }
  }, [messages, isBottom]);

  // находимся в конце, под скроллим новые сообщения
  useEffect(() => {
    if (isBottom) {
      handleScrollToBottom();
    }
  }, [typingUsersIds, isBottom]);

  return {
    scrollBarRef,
    refWatchBottom,
    isBottom,
    handleScrollToBottom,
  };
}
