import { Typography } from "@zhenyzh/common-ui/components";
import s from "./message-text.module.scss";

export function MessageText({ text }: { text: string }) {
  return (
    <Typography variant="h3" className={s.text}>
      {text}
    </Typography>
  );
}
