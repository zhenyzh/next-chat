import { Avatar } from "@zhenyzh/common-ui/components";
import { WrapperCardClose } from "../wrapper-card-close";
import type { FileAttach } from "@/entities/messages/model/types";
import { patchUrl } from "@/shared/configs";
import s from "./card-item-image.module.scss";

type Props = {
  file: FileAttach;
  onRemove?: () => void;
};

export function CardItemImage({ file, onRemove }: Props) {
  const image = patchUrl(file.url);

  return (
    <WrapperCardClose
      className={s.cardImage}
      classNameClose={s.closeIcon}
      onClose={onRemove}
    >
      <Avatar variant="whole" className={s.image} image={image} />
    </WrapperCardClose>
  );
}
