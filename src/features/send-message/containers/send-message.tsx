"use client";

import { TextareaAutosizeField } from "@zhenyzh/common-ui/components";

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
    <TextareaAutosizeField
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={"Сообщение"}
      style={{ paddingRight: 85 }}
      iconStart={<Add />}
      iconEnd={
        <>
          <EmojiSmile />
          {text.trim() ? <Sending /> : <Microphone />}
        </>
      }
    />
  );
}
