"use client";

import { TextareaAutosizeField } from "@zhenyzh/common-ui/components";
import { useMessageActions, useMessage } from "../model/store";
import { useTextareaFocus } from "../model/hooks";
import { EmojiSmile } from "../ui/emoji-smile";
import { Sending } from "../ui/sending";
import { Microphone } from "../ui/microphone";
import { AddDropdownMenu } from "../../file-attach/ui/add-dropdown-menu";
import { useTypingActions } from "@/features/typing/model/socket";
import { useMessageFieldAutoHeight } from "@/features/message-field-height/model/hooks";
import { FileAttach } from "@/features/file-attach/containers";
import s from "@/features/file-attach/containers/file-attach.module.scss";

export function SendMessage() {
  const message = useMessage();
  const { setText } = useMessageActions();
  const { sendTyping } = useTypingActions();
  const { textareaRef } = useTextareaFocus();
  const { heightResizeRef } = useMessageFieldAutoHeight();

  return (
    <>
      <FileAttach />
      <TextareaAutosizeField
        className={s.send}
        ref={(el) => {
          textareaRef.current = el;
          heightResizeRef.current = el;
        }}
        value={message}
        onChange={(e) => {
          setText(e.target.value);
          sendTyping();
        }}
        placeholder="Сообщение"
        style={{ paddingRight: 85 }}
        iconStart={<AddDropdownMenu />}
        iconEnd={
          <>
            <EmojiSmile />
            {message.trim() ? <Sending /> : <Microphone />}
          </>
        }
      />
    </>
  );
}
