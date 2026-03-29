import { useMessageFieldHeightActions } from "../store";
import { useHeightResizeObserver } from "@/shared/hooks";

export function useMessageFieldAutoHeight() {
  const { setHeight } = useMessageFieldHeightActions();
  const { ref: heightResizeRef } = useHeightResizeObserver((height) =>
    setHeight(height),
  );

  return { heightResizeRef };
}
