import { Box } from "@zhenyzh/common-ui/components";
import type { MessageContentType } from "../../model/types";
import { ImagesMessage } from "../images-message";
import { FilesMessage } from "../files-message";
import s from "./content-message.module.scss";

export function ContentMessage(content: MessageContentType) {
  const { images, files } = content;

  return (
    <Box className={s.container}>
      {!!images?.length && <ImagesMessage images={images} />}
      {!!files?.length && <FilesMessage files={files} />}
    </Box>
  );
}
