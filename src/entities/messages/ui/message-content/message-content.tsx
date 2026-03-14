import type { MessageContentType } from "@/entities/messages/model/types";
import { MessageImage } from "@/entities/messages";

export function MessageContent(content: MessageContentType) {
  const { imageUrl } = content;

  return <>{!!imageUrl?.length && <MessageImage imageUrl={imageUrl} />}</>;
}
