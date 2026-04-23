import { Box } from "@zhenyzh/common-ui/components";
import type { MessageContentType } from "@/entities/messages/model/types";
import { MessageImages } from "../message-images";
import { MessageFiles } from "../message-files";
import s from "./message-content.module.scss";

export function MessageContent(content: MessageContentType) {
  const { images, files } = content;

  return (
    <Box className={s.container}>
      {!!images?.length && <MessageImages images={images} />}
      {!!files?.length && <MessageFiles files={files} />}
    </Box>
  );
}
