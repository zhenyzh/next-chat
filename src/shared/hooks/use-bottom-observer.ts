import { useEffect, useRef, useState } from "react";

type BottomObserver<T> = Partial<{
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number | number[];
}>;

export function useBottomObserver<T>({
  root = null,
  rootMargin = "0px",
  threshold = 0,
}: BottomObserver<T> = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsBottom(entry.isIntersecting);
    });

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);

  return { ref, isBottom };
}
