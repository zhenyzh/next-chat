import { Box } from "@zhenyzh/common-ui/components";
import s from "./scrollbar.module.scss";

type ScrollBarProps = {
  children: React.ReactNode;
};

export function ScrollBar({ children }: ScrollBarProps) {
  return <Box className={s.scroll}>{children}</Box>;
}
