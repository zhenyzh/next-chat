"use client";

import { Avatar, Box, Typography } from "@zhenyzh/common-ui/components";
import s from "./message.module.scss";

export type MessageProps = {
  avatar: string;
  user: object;
  text: string;
  date: string;
};

export function Message({ avatar, user = {}, text, date }: MessageProps) {
  return (
    <Box className={s.message}>
      <Avatar image={avatar} />
      <Box className={s.messageContent}>
        <Box className={s.messageBubble}>
          <Typography as="p" className={s.messageText}>
            {text}
          </Typography>
        </Box>
        <Typography>{date} Вчера, в 13:55</Typography>
      </Box>
    </Box>
  );
}
