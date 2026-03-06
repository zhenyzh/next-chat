import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "@/features/auth/logout/api";

export function useLogoutQuery() {
  const actions = useMutation({
    mutationFn: logoutApi.logout,
  });

  return {
    isPending: actions.isPending,
    error: actions.error,
    handleLogout: actions.mutate,
  };
}
