import { Box, Typography } from "@zhenyzh/common-ui/components";
import { Bubble } from "@/shared/ui";
import s from "./typing-content.module.scss";

export function TypingIndicator() {
  return (
    <Box className={s.container}>
      <Typography className={s.text} variant="label">
        Печатает
      </Typography>
      <Bubble />
    </Box>
  );
}
