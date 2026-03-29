import { Box, Typography } from "@zhenyzh/common-ui/components";
import s from "./unread-messages.module.scss";

export function UnreadMessages() {
  return (
    <Box className={s.container}>
      <Typography variant="label" className={s.text}>
        Непрочитанные сообщения
      </Typography>
    </Box>
  );
}
