import clsx from "clsx";
import { Avatar, Typography } from "@zhenyzh/common-ui/components";
import { WrapperCardClose } from "../wrapper-card-close";
import { formatFileSize, getIconByFileExtension } from "../../lib/utils";
import { type FileItem, useFilesAttachActions } from "../../model/store";
import s from "./card-item-file.module.scss";

type Props = {
  fileItem: FileItem;
};

export function CardItemFile({ fileItem: { id, file } }: Props) {
  const { clearFile } = useFilesAttachActions();
  const fileIcon = getIconByFileExtension(file.name);
  const size = formatFileSize(file.size);

  return (
    <WrapperCardClose
      className={s.card}
      classNameClose={s.closeIcon}
      onClose={() => clearFile(id)}
    >
      <Avatar variant="whole" size={55} image={fileIcon.src} />
      <Typography variant="label" className={clsx(s.label, s.ellipsis)}>
        {file.name}
      </Typography>
      <Typography variant="caption" className={clsx(s.caption, s.ellipsis)}>
        {size}
      </Typography>
    </WrapperCardClose>
  );
}
