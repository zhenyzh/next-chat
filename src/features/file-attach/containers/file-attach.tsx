import { CardFile } from "../ui/card-file";
import { CardPhoto } from "../ui/card-photo";
import { WrapperCardFileClose } from "../ui/wrapper-card-file-close";
import { ScrollBar } from "@/shared/ui";
import s from "./file-attach.module.scss";

export function FileAttach() {
  return (
    <WrapperCardFileClose
      className={s.wrapper}
      classNameClose={s.closeIconContainer}
    >
      <ScrollBar variant="horizontal" className={s.scrollHorizontal}>
        <CardFile />
        <CardPhoto />
      </ScrollBar>
    </WrapperCardFileClose>
  );
}
