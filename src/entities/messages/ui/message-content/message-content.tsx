import type { MessageContentType } from "@/entities/messages/model/types";
import { MessageImages } from "../message-images";

export function MessageContent(content: MessageContentType) {
  const { images } = content;

  return <>{!!images?.length && <MessageImages images={images} />}</>;
}
