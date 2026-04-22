import { Avatar, Box } from "@zhenyzh/common-ui/components";
import type { FileAttach } from "../../model/types";
import { downloadFile } from "../../lib/utils";
import { patchUrl } from "@/shared/configs";
import s from "./message-images.module.scss";

export function MessageImages({ images }: { images: FileAttach[] }) {
  return (
    <Box className={s.container}>
      {images.map((img) => (
        <Box key={img.id} onClick={() => downloadFile(img)}>
          <Avatar
            image={patchUrl(img.url)}
            size={120}
            variant="whole"
            className={s.image}
          />
        </Box>
      ))}
    </Box>
  );
}
