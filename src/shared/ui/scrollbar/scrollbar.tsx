import { Box } from "@zhenyzh/common-ui/components";
import s from "./scrollbar.module.scss";

type ScrollBarProps = {
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
  style?: React.CSSProperties;
};

export function ScrollBar(props: ScrollBarProps) {
  return <Box className={s.scroll} {...props} />;
}
