import { Typography } from "@zhenyzh/common-ui/components";
import s from "./status-recipient.module.scss";

type Props = {
  isOnline: boolean;
};

export function StatusRecipient({ isOnline }: Props) {
  return (
    <Typography className={s.subInfo} variant="label">
      {isOnline ? "Online" : "Offline"}
    </Typography>
  );
}
