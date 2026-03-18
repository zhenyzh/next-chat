import { useEffect, useRef } from "react";
import { useMessage } from "../store";

export function useTextareaFocus() {
  const message = useMessage();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.focus();
  }, [message]);

  return { textareaRef };
}
