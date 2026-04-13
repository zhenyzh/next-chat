import { useEffect } from "react";
import type { StatusMessage } from "@/entities/messages/model/types";

type Props = {
  fromMe: boolean;
  onDelivered?: () => void;
  onRead?: () => void;
  isBottom?: boolean;
} & Omit<StatusMessage, "isSent">;

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
