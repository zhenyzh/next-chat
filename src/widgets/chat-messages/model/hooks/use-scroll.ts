import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useMessagesList } from "./use-messages-list";
import { useCurrentChat } from "@/entities/chat/model/hooks";

const BOTTOM_STOCK = 200;

export function useScroll() {
  const { messages } = useMessagesList();
  const { chatId } = useCurrentChat();

  const scrollRef = useRef<HTMLDivElement>(null);
  const lastMessageIdRef = useRef<number | null>(null);
  const autoScrollRef = useRef(true);

  const [isBottom, setIsBottom] = useState(true);

  const lastMessage = messages?.at(-1)?.messages?.at(-1);

  const checkIsBottom = () => {
    const el = scrollRef.current;
    if (!el) return true;
    return el.scrollTop + el.clientHeight >= el.scrollHeight - BOTTOM_STOCK;
  };

  const onBottom = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const isBottom = checkIsBottom();
      setIsBottom(isBottom);
      autoScrollRef.current = isBottom;
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // При смене чата скролл вниз
  useLayoutEffect(() => {
    onBottom();
    lastMessageIdRef.current = null;
    autoScrollRef.current = true;
  }, [chatId]);

  useLayoutEffect(() => {
    if (!lastMessage) return;

    // Пишем пользователю, он читает историю у него скролл после отправки сообщения не уходит вниз
    if (lastMessageIdRef.current === lastMessage.id) return;
    lastMessageIdRef.current = lastMessage.id;

    if (lastMessage.fromMe || autoScrollRef.current) {
      onBottom();
    }
  }, [lastMessage]);

  return {
    scrollRef,
    isBottom,
    onBottom,
  };
}
