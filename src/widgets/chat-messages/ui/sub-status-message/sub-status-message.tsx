import { useChangeStatusMessage } from "../../model/hooks";
import type { StatusMessage } from "@/entities/messages/model/types";
import { CheckStatusMessage } from "@/shared/ui";
import s from "./sub-status-message.module.scss";

type Props = {
  fromMe: boolean;
  status: StatusMessage;
  onDelivered?: () => void;
  onRead?: () => void;
  isBottom?: boolean;
};

export function SubStatusMessage({
  fromMe,
  status,
  onDelivered,
  onRead,
  isBottom,
}: Props) {
  useChangeStatusMessage({
    fromMe,
    isDelivered: status.isDelivered,
    isRead: status.isRead,
    onDelivered,
    onRead,
    isBottom,
  });

  return (
    <CheckStatusMessage
      show={fromMe}
      status={status}
      classNameCheck={s.container}
      classNameCheckCheck={s.container}
    />
  );
}
