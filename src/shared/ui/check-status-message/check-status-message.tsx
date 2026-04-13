import clsx from "clsx";
import { CheckCheck, Check } from "lucide-react";
import s from "./check-status-message.module.scss";

type Props = {
  status: {
    isSent: boolean;
    isDelivered: boolean;
    isRead: boolean;
  };
} & Partial<{
  classNameCheck: string;
  classNameCheckCheck: string;
  show: boolean;
}>;

export function CheckStatusMessage({
  status: { isSent, isDelivered, isRead },
  classNameCheck,
  classNameCheckCheck,
  show = true,
}: Props) {
  return (
    show && (
      <>
        {isSent && !isDelivered && <Check className={classNameCheck} />}
        {isDelivered && (
          <CheckCheck
            className={clsx(
              classNameCheckCheck,
              isDelivered && isRead && s.activeCheck,
            )}
          />
        )}
      </>
    )
  );
}
