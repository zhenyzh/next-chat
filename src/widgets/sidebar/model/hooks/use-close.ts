import { useEffect } from "react";

export function useClose({
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
