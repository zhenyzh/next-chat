import clsx from "clsx";
import { Avatar, Box, Card, Typography } from "@zhenyzh/common-ui/components";
import type { Message } from "../model/types";
import { ContentMessage } from "../ui/content-message";
import { TextMessage } from "../ui/text-message";
import { patchUrl } from "@/shared/configs";
import s from "./messages.module.scss";
import { AudioMessage } from "@/entities/messages/ui/audio-message";

type Props = {
  message: Message;
  subContent?: React.ReactNode;
};

export function Messages({ message, subContent }: Props) {
  const {
    sender: { avatarUrl, name } = {},
    fromMe,
    content: { text, audio, ...rest },
    time,
  } = message;

  return (
    <Card className={clsx(s.message, fromMe && s.me)}>
      <Avatar image={patchUrl(avatarUrl)} className={s.avatar} size={50} />
      <Card>
        <Box className={s.bubble}>
          <Typography variant="h3" className={s.name}>
            {name}
          </Typography>
          {text && <TextMessage text={text} />}
          {audio && <AudioMessage audio={audio} />}
          <ContentMessage {...rest} />
        </Box>
        <Typography variant="label" className={s.time}>
          {time}
        </Typography>
      </Card>
      {subContent && subContent}
    </Card>
  );
}
