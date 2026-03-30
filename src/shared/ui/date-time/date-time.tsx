import clsx from "clsx";
import { Typography } from "@zhenyzh/common-ui/components";
import s from "./date-time.module.scss";

export function DateTime({
  value,
  className,
}: {
  value: string | undefined;
  className?: string;
}) {
  return (
    <Typography variant="label" className={clsx(s.dateTime, className)}>
      {value && value}
    </Typography>
  );
}
