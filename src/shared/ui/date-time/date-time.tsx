import clsx from "clsx";
import { Typography } from "@zhenyzh/common-ui/components";
import s from "./date-time.module.scss";

export function DateTime({
  value,
  className,
}: {
  value: string | undefined | null;
  className?: string;
}) {
  return (
    value && (
      <Typography variant="label" className={clsx(s.dateTime, className)}>
        {value}
      </Typography>
    )
  );
}
