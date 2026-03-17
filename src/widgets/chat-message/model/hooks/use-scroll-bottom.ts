import { useEffect, useRef } from "react";
import { useGetMessages } from "./use-get-messages";

export function useScrollBottom() {
  const { messages } = useGetMessages();

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  return { scrollRef };
}
