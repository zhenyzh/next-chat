import { useEffect } from "react";

type Props = {
  fromMe: boolean;
  isDelivered: boolean;
  isRead: boolean;
  onDelivered?: () => void;
  onRead?: () => void;
  isBottom?: boolean;
};

export function useChangeStatusMessage({
  fromMe,
  isDelivered,
  isRead,
  onDelivered,
  onRead,
  isBottom,
}: Props) {
  useEffect(() => {
    if (!fromMe && !isDelivered) {
      onDelivered?.();
    }
  }, [fromMe, isDelivered, onDelivered]);

  useEffect(() => {
    if (!fromMe && !isRead && isBottom) {
      onRead?.();
    }
  }, [fromMe, isRead, isBottom, onRead]);
}
