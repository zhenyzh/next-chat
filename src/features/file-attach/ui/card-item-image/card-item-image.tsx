import { Avatar } from "@zhenyzh/common-ui/components";
import { WrapperCardClose } from "../wrapper-card-close";
import { useFilesAttachActions } from "../../model/store";
import type { FileAttach } from "@/entities/messages/model/types";
import { patchUrl } from "@/shared/configs";
import s from "./card-item-image.module.scss";

type Props = {
  file: FileAttach;
};

export function CardItemImage({ file }: Props) {
  const { clearFile } = useFilesAttachActions();
  const image = patchUrl(file.url);

  return (
    <WrapperCardClose
      className={s.cardImage}
      classNameClose={s.closeIconContainer}
      onClose={() => clearFile(file.id)}
    >
      <Avatar variant="whole" className={s.image} image={image} />
    </WrapperCardClose>
  );
}
