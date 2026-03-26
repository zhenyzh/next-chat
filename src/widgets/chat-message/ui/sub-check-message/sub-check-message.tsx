import { CheckCheck } from "lucide-react";
import s from "./sub-check-message.module.scss";
import clsx from "clsx";

type Props = {
  fromMe: boolean;
  isRead: boolean;
};

export function SubCheckMessage({ fromMe, isRead }: Props) {
  return (
    fromMe && (
      <CheckCheck className={clsx(s.checkIcons, isRead && s.activeCheck)} />
    )
  );
}
