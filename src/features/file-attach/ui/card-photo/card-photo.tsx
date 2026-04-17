import { Avatar } from "@zhenyzh/common-ui/components";
import { WrapperCardFileClose } from "../wrapper-card-file-close";
import s from "./card-photo.module.scss";

export function CardPhoto() {
  return (
    <WrapperCardFileClose
      className={s.cardImage}
      classNameClose={s.closeIconContainer2}
    >
      <Avatar
        variant="whole"
        className={s.image}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGRPzn7p0iresNG3SRxzEciTvOxDJeZT2EQ&s"
        }
      />
    </WrapperCardFileClose>
  );
}
