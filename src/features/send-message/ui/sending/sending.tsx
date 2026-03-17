import { SendHorizontal } from "lucide-react";
import { useSendMessage } from "../../model/hooks";
import { useChatsOpenCacheQuery } from "@/entities/chats/model/hooks";

export function Sending() {
  const { onSendMessage } = useSendMessage();
  const { chatId } = useChatsOpenCacheQuery();

  const onSending = () => {
    if (!chatId) return;
    onSendMessage();
  };

  return <SendHorizontal style={{ cursor: "pointer" }} onClick={onSending} />;
}
