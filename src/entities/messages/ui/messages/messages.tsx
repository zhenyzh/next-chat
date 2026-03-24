import clsx from "clsx";
import { CheckCheck } from "lucide-react";
import { Avatar, Box, Card, Typography } from "@zhenyzh/common-ui/components";
import type { Message } from "@/entities/messages/model/types";
import { MessageContent, MessageText } from "@/entities/messages";
import s from "./messages.module.scss";

type MessageProps = {
  message: Message;
};

export function Messages({ message }: MessageProps) {
  const {
    sender: { avatarUrl, name } = {},
    fromMe,
    content: { text, ...rest },
    time,
  } = message;

  return (
    <Card className={clsx(s.message, fromMe && s.me)}>
      <Avatar image={avatarUrl} className={clsx(s.avatar)} />
      <Card>
        {text && (
          <Box className={s.bubble}>
            <Typography variant="h3" className={s.name}>
              {name}
            </Typography>
            <MessageText text={text} />
            <MessageContent {...rest} />
          </Box>
        )}
        <Typography variant="label" className={s.time}>
          {time}
        </Typography>
      </Card>
      {fromMe && <CheckCheck className={s.checkIcons} />}
    </Card>
  );
}
