import { SendHorizontal } from "lucide-react";
import { useSendMessage } from "../../model/hooks";
import { useTypingActionsWS } from "@/features/typing/model/hooks";
import { useChatsOpenCacheQuery } from "@/entities/chats/model/hooks";

export function Sending() {
  const { chatId } = useChatsOpenCacheQuery();
  const { onSendMessage } = useSendMessage();
  const { stopTyping } = useTypingActionsWS();

  const onSending = () => {
    if (!chatId) return;
    onSendMessage();
    stopTyping();
  };

  return <SendHorizontal style={{ cursor: "pointer" }} onClick={onSending} />;
}
