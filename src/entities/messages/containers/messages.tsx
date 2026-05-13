import type { ReactNode } from "react";
import clsx from "clsx";
import { Avatar, Box, Card, Typography } from "@zhenyzh/common-ui/components";
import type { Message } from "../model/types";
import { ContentMessage } from "../ui/content-message";
import { TextMessage } from "../ui/text-message";
import { AudioMessage } from "../ui/audio-message";
import { patchUrl } from "@/shared/configs";
import { DateTime } from "@/shared/ui";
import s from "./messages.module.scss";

type Props = {
  message: Message;
  subContent?: ReactNode;
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
        <DateTime className={s.time} value={time} />
      </Card>
      {subContent && subContent}
    </Card>
  );
}
