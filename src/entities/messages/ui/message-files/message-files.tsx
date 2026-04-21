import type { FileAttach } from "../../model/types";
import { CardPreview } from "@/shared/ui";
import { formatFileSize, getIconByFileExtension } from "@/shared/utils";
import s from "./message-files.module.scss";

export function MessageFiles({ files }: { files: FileAttach[] }) {
  return (
    <>
      {files.map((file) => (
        <CardPreview
          key={file.id}
          title={file.name}
          classNameTitle={s.title}
          classNameContainer={s.cardContainer}
          url={getIconByFileExtension(file.name).src}
          variantUrl="whole"
          subInfoSlot={<>{formatFileSize(file.size)}</>}
        />
      ))}
    </>
  );
}
