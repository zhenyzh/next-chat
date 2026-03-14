import { useEffect, useRef } from "react";
import { useTextMessage } from "../store";

export function useTextareaFocus() {
  const text = useTextMessage();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.focus();
  }, [text]);

  return { textareaRef };
}
