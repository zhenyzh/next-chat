import { Box } from "@zhenyzh/common-ui/components";
import type { FileAttach } from "../../model/types";
import { downloadFile } from "../../lib/utils";
import { CardPreview } from "@/shared/ui";
import { formatFileSize, getIconByFileExtension } from "@/shared/utils";
import s from "./message-files.module.scss";

export function MessageFiles({ files }: { files: FileAttach[] }) {
  return (
    <>
      {files.map((file) => (
        <Box
          key={file.id}
          className={s.pointer}
          onClick={() => downloadFile(file)}
        >
          <CardPreview
            title={file.name}
            classNameTitle={s.title}
            classNameContainer={s.cardContainer}
            url={getIconByFileExtension(file.name).src}
            variantUrl="whole"
            subInfoSlot={
              <Box className={s.ellipsis}>{formatFileSize(file.size)}</Box>
            }
          />
        </Box>
      ))}
    </>
  );
}
