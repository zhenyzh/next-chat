"use client";

import clsx from "clsx";
import { CheckCheck } from "lucide-react";

import { Avatar, Box, Card, Typography } from "@zhenyzh/common-ui/components";

import type { Message } from "@/entities/messages/model";
import { MessageContent, MessageText } from "@/entities/messages";

import s from "../styles/messages.module.scss";

type MessageProps = {
  message: Message;
};

export function Messages({ message }: MessageProps) {
  const {
    user: { avatarUrl, fullName },
    fromMe,
    date,
    content: { text, ...rest },
  } = message;

  return (
    <Card className={clsx(s.message, fromMe && s.me)}>
      <Avatar image={avatarUrl} className={s.avatar} />

      <Card>
        {text && (
          <Box className={s.bubble}>
            <Typography variant="h3" className={s.name}>
              {fullName}
            </Typography>
            <MessageText text={text} />
          </Box>
        )}

        <MessageContent {...rest} />

        <Typography variant="label" className={s.date}>
          {date}
        </Typography>
      </Card>

      {fromMe && <CheckCheck className={s.checkIcons} />}
    </Card>
  );
}
