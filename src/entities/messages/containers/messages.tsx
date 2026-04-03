import clsx from "clsx";
import { Avatar, Box, Card, Typography } from "@zhenyzh/common-ui/components";
import type { Message } from "../model/types";
import { MessageContent } from "../ui/message-content";
import { MessageText } from "../ui/message-text";
import { patchUrl } from "@/shared/configs";
import s from "./messages.module.scss";

type Props = {
  message: Message;
  subContent?: React.ReactNode;
};

export function Messages({ message, subContent }: Props) {
  const {
    sender: { avatarUrl, name } = {},
    fromMe,
    content: { text, ...rest },
    time,
  } = message;

  return (
    <Card className={clsx(s.message, fromMe && s.me)}>
      <Avatar image={patchUrl(avatarUrl)} className={s.avatar} />
      <Card>
        <Box className={s.bubble}>
          <Typography variant="h3" className={s.name}>
            {name}
          </Typography>
          {text && <MessageText text={text} />}
          <MessageContent {...rest} />
        </Box>
        <Typography variant="label" className={s.time}>
          {time}
        </Typography>
      </Card>
      {subContent && subContent}
    </Card>
  );
}
