import { useEffect } from "react";

export function useCloseToCollapsed({
  collapsed,
  onClose,
}: {
  collapsed?: boolean;
  onClose?: () => void;
}) {
  useEffect(() => {
    if (collapsed) {
      onClose?.();
    }
  }, [collapsed, onClose]);
}
