import { useEffect, useRef } from "react";

export function useHeightResizeObserver<T extends Element>(
  callback: (value: number) => void,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      callback(entry.contentRect.height);
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, callback]);

  return { ref };
}
