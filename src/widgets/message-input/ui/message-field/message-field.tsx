import { TextareaAutosizeField } from "@zhenyzh/common-ui/components";
import { useTextareaFocus } from "../../hooks";
import { EmojiSmile } from "../emoji-smile";
import { Sending } from "../sending";
import { Microphone } from "../microphone";
import { useTypingActions } from "@/features/typing/model/socket";
import {
  useMessage,
  useMessageActions,
} from "@/features/send-message/model/store";
import { useFilesAttach } from "@/features/file-attach/model/store";
import { FileAttachDropdownMenu } from "@/features/file-attach/containers";

export function MessageField() {
  const { setText } = useMessageActions();
  const { sendTyping } = useTypingActions();
  const { textareaRef } = useTextareaFocus();
  const message = useMessage();
  const files = useFilesAttach();

  return (
    <TextareaAutosizeField
      ref={textareaRef}
      value={message}
      onChange={(e) => {
        setText(e.target.value);
        sendTyping();
      }}
      placeholder="Сообщение"
      style={{ paddingRight: 85 }}
      iconStart={<FileAttachDropdownMenu />}
      iconEnd={
        <>
          <EmojiSmile />
          {message.trim() || files.length ? <Sending /> : <Microphone />}
        </>
      }
    />
  );
}
