import { Avatar } from "@zhenyzh/common-ui/components";
import { WrapperCardClose } from "../wrapper-card-close";
import {
  type FileItem,
  useFilesAttachActions,
} from "@/features/file-attach/model/store";
import s from "./card-item-image.module.scss";

type Props = {
  fileItem: FileItem;
};

export function CardItemImage({ fileItem: { id, file } }: Props) {
  const { clearFile } = useFilesAttachActions();
  const image = URL.createObjectURL(file);

  return (
    <WrapperCardClose
      className={s.cardImage}
      classNameClose={s.closeIconContainer}
      onClose={() => clearFile(id)}
    >
      <Avatar variant="whole" className={s.image} image={image} />
    </WrapperCardClose>
  );
}
