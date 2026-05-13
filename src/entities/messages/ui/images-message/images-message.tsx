import { Avatar, Box } from "@zhenyzh/common-ui/components";
import type { FileAttach } from "../../model/types";
import { downloadFile } from "../../lib/utils";
import { patchUrl } from "@/shared/configs";
import s from "./images-message.module.scss";

export function ImagesMessage({ images }: { images: FileAttach[] }) {
  const isOdd = images.length % 2 !== 0;

  return (
    <Box className={s.container}>
      {images.map((img, index) => {
        const lastOddImage = isOdd && index === images.length - 1;

        return (
          <Box
            key={img.id}
            className={lastOddImage && s.fullLastImage}
            onClick={() => downloadFile(img)}
          >
            <Avatar
              image={patchUrl(img.url)}
              variant="whole"
              className={s.image}
            />
          </Box>
        );
      })}
    </Box>
  );
}
