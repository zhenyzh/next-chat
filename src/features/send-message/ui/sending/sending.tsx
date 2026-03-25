import { SendHorizontal } from "lucide-react";
import { useSendMessage } from "../../model/hooks";
import { useTypingActionsSocket } from "@/features/typing/model/hooks";
import { useChatOpenCacheQuery } from "@/entities/chat/model/hooks";

export function Sending() {
  const { chatId } = useChatOpenCacheQuery();
  const { onSendMessage } = useSendMessage();
  const { stopTyping } = useTypingActionsSocket();

  const onSending = () => {
    if (!chatId) return;
    onSendMessage();
    stopTyping();
  };

  return <SendHorizontal style={{ cursor: "pointer" }} onClick={onSending} />;
}
