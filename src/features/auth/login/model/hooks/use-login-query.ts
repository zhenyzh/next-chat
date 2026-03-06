import { useMutation } from "@tanstack/react-query";
import { loginApi } from "@/features/auth/login/api";

export function useLoginQuery() {
  const actions = useMutation({
    mutationFn: loginApi.login,
  });

  return {
    data: actions.data,
    isPending: actions.isPending,
    error: actions.error,
    handleLogin: actions.mutate,
  };
}
