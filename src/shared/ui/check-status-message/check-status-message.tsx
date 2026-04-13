import clsx from "clsx";
import { CheckCheckIcon, CheckIcon } from "@zhenyzh/common-ui/icons";
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
        {isSent && !isDelivered && <CheckIcon className={classNameCheck} />}
        {isDelivered && (
          <CheckCheckIcon
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
