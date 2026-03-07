import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "@/features/auth/logout/api";

export function useLogoutMutation() {
  const mutation = useMutation({
    mutationFn: logoutApi.logout,
  });

  return {
    isPending: mutation.isPending,
    error: mutation.error,
    handleLogout: mutation.mutate,
  };
}
