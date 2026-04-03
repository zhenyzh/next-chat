import type { MessageContentType } from "@/entities/messages/model/types";
import { MessageImage } from "../message-image";

export function MessageContent(content: MessageContentType) {
  const { imageUrl } = content;

  return <>{!!imageUrl?.length && <MessageImage imageUrl={imageUrl} />}</>;
}
