import clsx from "clsx";
import { Box, Typography } from "@zhenyzh/common-ui/components";
import { Bubble } from "@/shared/ui";
import s from "./typing-indicator.module.scss";

export function TypingIndicator({ visible }: { visible: boolean }) {
  return (
    <Box className={clsx(s.container, !visible && s.hidden)}>
      <Typography className={s.text} variant="label">
        Печатает
      </Typography>
      <Bubble />
    </Box>
  );
}
