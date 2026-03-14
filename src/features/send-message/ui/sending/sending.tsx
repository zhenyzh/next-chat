import { SendHorizontal } from "lucide-react";
import { useSendMessage } from "../../model/hooks";

export function Sending() {
  const { onSendMessage } = useSendMessage();

  return (
    <SendHorizontal style={{ cursor: "pointer" }} onClick={onSendMessage} />
  );
}
