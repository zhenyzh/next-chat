import clsx from "clsx";
import { CheckCheck, Check } from "lucide-react";
import { useChangeStatusMessage } from "../../model/hooks";
import type { StatusMessage } from "@/entities/messages/model/types";
import s from "./sub-status-message.module.scss";

type Props = {
  fromMe: boolean;
  statusMessage: StatusMessage;
  onDelivered?: () => void;
  onRead?: () => void;
  isBottom?: boolean;
};

export function SubStatusMessage({
  fromMe,
  statusMessage: { isSent, isDelivered, isRead },
  onDelivered,
  onRead,
  isBottom,
}: Props) {
  useChangeStatusMessage({
    fromMe,
    isDelivered,
    isRead,
    onDelivered,
    onRead,
    isBottom,
  });

  return (
    fromMe && (
      <>
        {isSent && !isDelivered && <Check className={s.checkIcons} />}
        {isDelivered && (
          <CheckCheck
            className={clsx(
              s.checkIcons,
              isDelivered && isRead && s.activeCheck,
            )}
          />
        )}
      </>
    )
  );
}
