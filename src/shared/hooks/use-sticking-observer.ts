import { useEffect, useRef, useState } from "react";

type StickingObserver = Partial<{
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number | number[];
}>;

export function useStickingObserver({
  root = null,
  rootMargin = "0px",
  threshold = 0,
}: StickingObserver = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      {
        root,
        rootMargin,
        threshold,
      },
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);

  return { ref, isStuck };
}
