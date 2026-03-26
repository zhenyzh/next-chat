import clsx from "clsx";
import { CheckCheck, Check } from "lucide-react";
import type { StatusMessage } from "@/entities/messages";
import s from "./sub-check-message.module.scss";

type Props = {
  fromMe: boolean;
  statusMessage: StatusMessage;
};

export function SubCheckMessage({ fromMe, statusMessage }: Props) {
  const { isSent, isDelivered, isRead } = statusMessage;

  return (
    fromMe && (
      <>
        {isSent && <Check className={s.checkIcons} />}
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
