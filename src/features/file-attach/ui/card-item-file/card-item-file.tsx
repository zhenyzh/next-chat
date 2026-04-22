import clsx from "clsx";
import { Avatar, Typography } from "@zhenyzh/common-ui/components";
import { WrapperCardClose } from "../wrapper-card-close";
import type { FileAttach } from "@/entities/messages/model/types";
import { formatFileSize, getIconByFileExtension } from "@/shared/utils";
import s from "./card-item-file.module.scss";

type Props = {
  file: FileAttach;
  onRemove?: () => void;
};

export function CardItemFile({ file, onRemove }: Props) {
  const fileIcon = getIconByFileExtension(file.name);
  const size = formatFileSize(file.size);

  return (
    <WrapperCardClose
      className={s.card}
      classNameClose={s.closeIcon}
      onClose={onRemove}
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
