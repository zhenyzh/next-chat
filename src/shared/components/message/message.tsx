"use client";

import { Box, Card, Typography, Avatar } from "@zhenyzh/common-ui/components";
import s from "./message.module.scss";

export type MessageProps = {
  avatar: string;
  user: object;
  text: string;
  date: string;
};

export function Message({ avatar, user = {}, text, date }: MessageProps) {
  return (
    <Card className={s.message}>
      <Avatar image={avatar} variant="whole" className={s.messageAvatar} />
      <Card>
        <Box className={s.messageBubble}>
          <Typography variant="h3" className={s.messageText}>
            {text}
          </Typography>
        </Box>
        <Typography variant="label" className={s.messageDate}>
          вчера, 10:23
        </Typography>
      </Card>
    </Card>
  );
}
