import type { MessageContent } from "@/entities/messages/model";
import { MessageImage } from "./message-image/message-image";

export function ContentMessage(content: MessageContent) {
  const { imageUrl } = content;

  return <>{!!imageUrl?.length && <MessageImage imageUrl={imageUrl} />}</>;
}
