"use client";

import { Box, Card, Typography } from "@zhenyzh/common-ui/components";
import { AvatarWrapper } from "@/shared/components";
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
      <AvatarWrapper image={avatar} className={s.messageAvatar} />
      <Card>
        <Box className={s.messageBubble}>
          <Typography variant="h3" className={s.messageName}>
            {"Иванов Иван"}
          </Typography>
          <Typography variant="h3" className={s.messageText}>
            {text}
          </Typography>
        </Box>
        <Typography variant="label" className={s.messageDate}>
          {date}
        </Typography>
      </Card>
    </Card>
  );
}
