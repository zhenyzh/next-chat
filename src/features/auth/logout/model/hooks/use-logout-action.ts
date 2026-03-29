import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../../api";

export function useLogoutAction() {
  const mutation = useMutation({
    mutationFn: logoutApi.logout,
  });

  return {
    isPending: mutation.isPending,
    error: mutation.error,
    handleLogout: mutation.mutate,
  };
}
