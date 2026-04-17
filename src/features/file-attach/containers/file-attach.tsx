import { CardItemFile } from "../ui/card-item-file";
import { CardItemImage } from "../ui/card-item-image";
import { WrapperCardClose } from "../ui/wrapper-card-close";
import { useFiles } from "../model/store";
import { ScrollBar } from "@/shared/ui";
import s from "./file-attach.module.scss";

export function FileAttach() {
  const files = useFiles();
  console.log({ files });
  return (
    <WrapperCardClose
      className={s.wrapper}
      classNameClose={s.closeIconContainer}
    >
      <ScrollBar variant="horizontal" className={s.scrollHorizontal}>
        {/*<CardItemFile />*/}
        {/*<CardItemImage />*/}
      </ScrollBar>
    </WrapperCardClose>
  );
}
