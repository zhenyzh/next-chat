import type { StaticImageData } from "next/image";
import PptIcon from "@/shared/assets/images/ppt_icon.png";
import DocIcon from "@/shared/assets/images/doc_icon.png";
import DocxIcon from "@/shared/assets/images/docx_icon.png";
import XlsIcon from "@/shared/assets/images/xls_icon.png";
import PptxIcon from "@/shared/assets/images/pptx_icon.png";
import PdfIcon from "@/shared/assets/images/pdf_icon.png";
import TxtIcon from "@/shared/assets/images/txt_icon.png";
import OtherIcon from "@/shared/assets/images/other_icon.png";

type FileExtension = "ppt" | "doc" | "docx" | "xls" | "pptx" | "pdf" | "txt";

const icon: Record<FileExtension, StaticImageData> = {
  ppt: PptIcon,
  doc: DocIcon,
  docx: DocxIcon,
  xls: XlsIcon,
  pptx: PptxIcon,
  pdf: PdfIcon,
  txt: TxtIcon,
};

export function getIconByFileExtension(fileName: string) {
  const extension = fileName.split(".").pop()?.toLowerCase() || "";
  return icon[extension as FileExtension] || OtherIcon;
}
