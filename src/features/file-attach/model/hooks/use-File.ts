import { MouseEvent, useState } from "react";
import { useFilesActions } from "../store";

export function useFile(onClose?: () => void) {
  const { setFile: setFileAction } = useFilesActions();
  const [file, setFile] = useState<File | null>(null);

  const onSetFile = (file: File) => {
    setFile(file);
  };

  const onSaveFile = () => {
    if (!file) return;
    onRemoveFile();
    setFileAction(file);
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
    onSetFile,
    onSaveFile,
    onRemoveFile,
    handleClose,
  };
}
