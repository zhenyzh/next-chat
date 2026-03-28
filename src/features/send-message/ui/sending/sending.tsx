import { SendHorizontal } from "lucide-react";
import { Button } from "@zhenyzh/common-ui/components";
import { useSendMessage } from "../../model/hooks";
import { useTypingActionsSocket } from "@/features/typing/model/socket";
import { useChatOpenCacheQuery } from "@/entities/chat/model/hooks";
import s from "./sending.module.scss";

export function Sending() {
  const { chatId } = useChatOpenCacheQuery();
  const { onSendMessage } = useSendMessage();
  const { stopTyping } = useTypingActionsSocket();

  const onSending = () => {
    if (!chatId) return;
    onSendMessage();
    stopTyping();
  };

  return (
    <Button variant="outline" className={s.container} onClick={onSending}>
      <SendHorizontal />
    </Button>
  );
}
