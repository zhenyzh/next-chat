import { useMutation } from "@tanstack/react-query";
import { loginApi } from "@/features/auth/login/api";

export function useLogin() {
  const actions = useMutation({
    mutationFn: loginApi.login,
  });

  return {
    isPending: actions.isPending,
    error: actions.error,
    handleRegistration: actions.mutate,
  };
}
