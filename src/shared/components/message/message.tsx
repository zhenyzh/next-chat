"use client";

import clsx from "clsx";
import { CheckCheck } from "lucide-react";
import { Box, Card, Typography } from "@zhenyzh/common-ui/components";
import { AvatarWrapper } from "@/shared/components";
import s from "./message.module.scss";

export type MessageProps = {
  avatar: string;
  user: object;
  text: string;
  date: string;
  isMe?: boolean;
};

export function Message({ avatar, user = {}, text, date, isMe }: MessageProps) {
  return (
    <Card className={clsx(s.message, isMe && s.me)}>
      <AvatarWrapper image={avatar} className={s.avatar} />
      <Card>
        <Box className={s.bubble}>
          <Typography variant="h3" className={s.name}>
            {"Иванов Иван"}
          </Typography>
          <Typography variant="h3" className={s.text}>
            {text}
          </Typography>
        </Box>
        <Typography variant="label" className={s.date}>
          {date}
        </Typography>
      </Card>
      {isMe && <CheckCheck className={s.checkIcons} />}
    </Card>
  );
}
