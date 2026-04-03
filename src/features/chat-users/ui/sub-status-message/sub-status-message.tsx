import clsx from "clsx";
import { CheckCheck, Check } from "lucide-react";
import type { StatusMessage } from "@/entities/messages/model/types";
import s from "./sub-status-message.module.scss";

type Props = {
  status: StatusMessage;
};

export function SubStatusMessage({ status }: Props) {
  const { isSent, isDelivered, isRead } = status;

  return (
    <>
      {isSent && !isDelivered && <Check />}
      {isDelivered && (
        <CheckCheck className={clsx(isDelivered && isRead && s.activeCheck)} />
      )}
    </>
  );
}
