import { MouseEvent, useState } from "react";
import { useUploadFileAttach } from "../hooks";

export function useFile(onClose?: () => void) {
  const { onUploadFileAttach, isPending } = useUploadFileAttach();
  const [file, setFile] = useState<File | null>(null);

  const onSetFile = (file: File) => {
    setFile(file);
  };

  const onSaveFile = () => {
    if (!file) return;
    onRemoveFile();
    onUploadFileAttach(file);
    onClose?.();
  };

  const onRemoveFile = () => {
    setFile(null);
  };

  const handleClose = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setFile(null);
      onClose?.();
    }
  };

  return {
    file,
    isPending,
    onSetFile,
    onSaveFile,
    onRemoveFile,
    handleClose,
  };
}
