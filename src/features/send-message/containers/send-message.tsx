"use client";

import { TextField } from "@zhenyzh/common-ui/components";

import {
  useMessageActions,
  useTextMessage,
} from "@/features/send-message/model/store";

import { Add } from "../ui/add";
import { EmojiSmile } from "../ui/emoji-smile";
import { Sending } from "../ui/sending";
import { Microphone } from "../ui/microphone";

export function SendMessage() {
  const text = useTextMessage();
  const { setText } = useMessageActions();

  return (
    <TextField
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={"Сообщение"}
      iconStart={<Add />}
      style={{ paddingRight: 85 }}
      iconEnd={
        <>
          <EmojiSmile />
          {text.trim() ? <Sending /> : <Microphone />}
        </>
      }
    />
  );
}
