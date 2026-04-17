import { Avatar } from "@zhenyzh/common-ui/components";
import { WrapperCardClose } from "../wrapper-card-close";
import s from "./card-item-image.module.scss";

export function CardItemImage(file: File) {
  const image = URL.createObjectURL(file);

  return (
    <WrapperCardClose
      className={s.cardImage}
      classNameClose={s.closeIconContainer2}
    >
      <Avatar variant="whole" className={s.image} image={image} />
    </WrapperCardClose>
  );
}
