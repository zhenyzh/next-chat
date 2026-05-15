import clsx from "clsx";
import { ImageUploader } from "@zhenyzh/common-ui/components";
import type { ImageUploaderProps } from "@zhenyzh/common-ui/components";
import {
  FileUploaderContainer,
  type FileUploaderContainerProps,
} from "@/shared/ui";
import s from "./image-uploader-container.module.scss";

type Props = ImageUploaderProps & {
  className?: string;
} & Omit<FileUploaderContainerProps, "children">;

export function ImageUploaderContainer({
  className,
  onImageSelect,
  onRemoveFile,
  placeholder,
  cropShape,
  enableCrop = false,
  ...restProps
}: Props) {
  return (
    <FileUploaderContainer {...restProps}>
      <ImageUploader
        className={clsx(s.imageUploader, className)}
        onImageSelect={onImageSelect}
        onRemoveFile={onRemoveFile}
        placeholder={placeholder || "Выберите или перетащите изображение"}
        cropShape={cropShape}
        enableCrop={enableCrop}
      />
    </FileUploaderContainer>
  );
}
