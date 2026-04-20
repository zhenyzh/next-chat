import { useMutation } from "@tanstack/react-query";
import { fileAttachApi } from "../../api";
import { useFilesAttachActions } from "../store";

export function useUploadFileAttach() {
  const { setFile } = useFilesAttachActions();

  const mutation = useMutation({
    mutationFn: fileAttachApi.sendFilesAttach,
    onSuccess: (data) => {
      setFile(data);
    },
  });

  const onUploadFileAttach = (file: File) => {
    mutation.mutate(file);
  };

  return {
    onUploadFileAttach,
    isPending: mutation.isPending,
  };
}
