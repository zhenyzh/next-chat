import { Box, Typography } from "@zhenyzh/common-ui/components";
import { Bubble } from "@/shared/ui";
import s from "./typing-indicator.module.scss";

export function TypingIndicator() {
  return (
    <Box className={s.container}>
      <Bubble />
      <Typography className={s.text} variant="label">
        Печатает
      </Typography>
    </Box>
  );
}
