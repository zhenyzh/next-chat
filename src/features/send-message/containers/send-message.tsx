"use client";

import { TextareaAutosizeField } from "@zhenyzh/common-ui/components";
import {
  useMessageActions,
  useMessage,
} from "@/features/send-message/model/store";
import { useTextareaFocus } from "@/features/send-message/model/hooks";
import { EmojiSmile } from "../ui/emoji-smile";
import { Sending } from "../ui/sending";
import { Microphone } from "../ui/microphone";
import { AddDropdownMenu } from "../ui/add-dropdown-menu";

export function SendMessage() {
  const message = useMessage();
  const { setText } = useMessageActions();
  const { textareaRef } = useTextareaFocus();

  return (
    <TextareaAutosizeField
      ref={textareaRef}
      value={message}
      onChange={(e) => setText(e.target.value)}
      placeholder={"Сообщение"}
      style={{ paddingRight: 85 }}
      iconStart={<AddDropdownMenu />}
      iconEnd={
        <>
          <EmojiSmile />
          {message.trim() ? <Sending /> : <Microphone />}
        </>
      }
    />
  );
}
