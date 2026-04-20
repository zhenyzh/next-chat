import { Button } from "@zhenyzh/common-ui/components";
import { SendHorizontalIcon } from "@zhenyzh/common-ui/icons";
import { useSendMessage } from "@/features/send-message/model/hooks";
import { useTypingActions } from "@/features/typing/model/socket";
import { useOpenCurrentChat } from "@/entities/chat/model/hooks";
import s from "./sending.module.scss";

export function Sending() {
  const { chatId } = useOpenCurrentChat();
  const { onSendMessage } = useSendMessage();
  const { stopTyping } = useTypingActions();

  const onSending = () => {
    if (!chatId) return;
    onSendMessage();
    stopTyping();
  };

  return (
    <Button variant="outline" className={s.container} onClick={onSending}>
      <SendHorizontalIcon />
    </Button>
  );
}
