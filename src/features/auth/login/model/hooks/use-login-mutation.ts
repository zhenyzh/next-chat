import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../api";

export function useLoginMutation() {
  const mutation = useMutation({
    mutationFn: loginApi.login,
  });

  return {
    data: mutation.data,
    isPending: mutation.isPending,
    error: mutation.error,
    handleLogin: mutation.mutate,
  };
}
