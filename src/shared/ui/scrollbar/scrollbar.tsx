import clsx from "clsx";
import { Box } from "@zhenyzh/common-ui/components";
import s from "./scrollbar.module.scss";

type ScrollBarProps = {
  children: React.ReactNode;
  variant?: "vertical" | "horizontal";
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
  style?: React.CSSProperties;
};

export function ScrollBar({
  className,
  variant = "vertical",
  ...props
}: ScrollBarProps) {
  return <Box className={clsx(s[variant], className)} {...props} />;
}
