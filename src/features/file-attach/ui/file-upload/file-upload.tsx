import { FileUploader } from "@zhenyzh/common-ui/components";
import { PlusIcon } from "@zhenyzh/common-ui/icons";
import { useFile } from "../../model/hooks";
import { FileUploaderContainer } from "@/shared/ui";

type Props = {
  onClose?: () => void;
};

export function FileUpload({ onClose }: Props) {
  const { file, onSetFile, onSaveFile, onRemoveFile, handleClose } =
    useFile(onClose);

  return (
    <FileUploaderContainer
      onClickContainer={handleClose}
      onClickButton={onSaveFile}
      disabledButton={!file}
      buttonIcon={<PlusIcon />}
    >
      <FileUploader
        onFileSelect={onSetFile}
        onRemoveFile={onRemoveFile}
        placeholder="Выберите или перетащите файл"
      />
    </FileUploaderContainer>
  );
}
