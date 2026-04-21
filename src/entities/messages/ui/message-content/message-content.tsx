import type { MessageContentType } from "@/entities/messages/model/types";
import { MessageImages } from "../message-images";
import { MessageFiles } from "../message-files";

export function MessageContent(content: MessageContentType) {
  const { images, files } = content;

  return (
    <>
      {!!images?.length && <MessageImages images={images} />}
      {!!files?.length && <MessageFiles files={files} />}
    </>
  );
}
