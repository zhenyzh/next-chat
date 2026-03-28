import { Box, Typography } from "@zhenyzh/common-ui/components";
import s from "./notification-of-new-messages.module.scss";

export function NotificationOfNewMessages() {
  return (
    <Box className={s.container}>
      <Typography variant="label" className={s.text}>
        У вас новое сообщение
      </Typography>
    </Box>
  );
}
