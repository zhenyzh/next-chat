import { PlusIcon } from "@zhenyzh/common-ui/icons";
import { useFile } from "../../model/hooks";
import { ImageUploaderContainer } from "@/shared/ui";

type Props = {
  onClose?: () => void;
};

export function ImageUpload({ onClose }: Props) {
  const { file, isPending, onSetFile, onSaveFile, onRemoveFile, handleClose } =
    useFile(onClose);

  return (
    <ImageUploaderContainer
      onClickButton={onSaveFile}
      onClickContainer={handleClose}
      onImageSelect={onSetFile}
      onRemoveFile={onRemoveFile}
      buttonIcon={<PlusIcon />}
      disabledButton={!file || isPending}
    />
  );
}
