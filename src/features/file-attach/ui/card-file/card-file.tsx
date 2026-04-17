import clsx from "clsx";
import { Avatar, Typography } from "@zhenyzh/common-ui/components";
import {} from "@zhenyzh/common-ui/icons";
import { WrapperCardFileClose } from "../wrapper-card-file-close";
import PptIcon from "@/shared/assets/images/ppt_icon.png";
import DocIcon from "@/shared/assets/images/doc_icon.png";
import DocxIcon from "@/shared/assets/images/docx_icon.png";
import XlsIcon from "@/shared/assets/images/xls_icon.png";
import PptxIcon from "@/shared/assets/images/pptx_icon.png";
import PdfIcon from "@/shared/assets/images/pdf_icon.png";
import s from "./card-file.module.scss";

export function CardFile() {
  return (
    <WrapperCardFileClose className={s.card} classNameClose={s.closeIcon}>
      <Avatar variant="whole" size={55} image={XlsIcon.src} />
      <Typography variant="label" className={clsx(s.label, s.ellipsis)}>
        Презентация
      </Typography>
      <Typography variant="caption" className={clsx(s.caption, s.ellipsis)}>
        4.7MB
      </Typography>
    </WrapperCardFileClose>
  );
}
