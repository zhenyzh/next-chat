import type { ReactNode } from "react";
import clsx from "clsx";
import { Box } from "@zhenyzh/common-ui/components";
import s from "./visible-wrapper.module.scss";

export function VisibleWrapper({
  children,
  visible,
}: {
  children: ReactNode;
  visible: boolean;
}) {
  return <Box className={clsx(!visible && s.hidden)}>{children}</Box>;
}
