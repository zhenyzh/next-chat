import { MouseEvent, useState } from "react";
import { useFilesAttachActions } from "../store";

export function useFile(onClose?: () => void) {
  const { setFile: setFilesAttach } = useFilesAttachActions();
  const [file, setFile] = useState<File | null>(null);

  const onSetFile = (file: File) => {
    setFile(file);
  };

  const onSaveFile = () => {
    if (!file) return;
    onRemoveFile();
    setFilesAttach(file);
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
