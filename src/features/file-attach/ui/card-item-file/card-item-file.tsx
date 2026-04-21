import clsx from "clsx";
import { Avatar, Typography } from "@zhenyzh/common-ui/components";
import { WrapperCardClose } from "../wrapper-card-close";
import { useFilesAttachActions } from "../../model/store";
import type { FileAttach } from "@/entities/messages/model/types";
import { formatFileSize, getIconByFileExtension } from "@/shared/utils";
import s from "./card-item-file.module.scss";

type Props = {
  file: FileAttach;
};

export function CardItemFile({ file }: Props) {
  const { clearFile } = useFilesAttachActions();
  const fileIcon = getIconByFileExtension(file.name);
  const size = formatFileSize(file.size);

  return (
    <WrapperCardClose
      className={s.card}
      classNameClose={s.closeIcon}
      onClose={() => clearFile(file.id)}
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
