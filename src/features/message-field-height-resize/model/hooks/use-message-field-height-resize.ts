import { useMessageFieldHeightResizeActions } from "../store";
import { useHeightResizeObserver } from "@/shared/hooks";

export function useMessageFieldHeightResize() {
  const { setHeight } = useMessageFieldHeightResizeActions();
  const { ref: heightResizeRef } = useHeightResizeObserver((height) =>
    setHeight(height),
  );

  return { heightResizeRef };
}
