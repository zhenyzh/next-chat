import { useRouter } from "next/navigation";
import { useLogoutQuery } from "./use-logout-query";
import { Paths } from "@/shared/configs";
import { tokenService } from "@/shared/token-service";
import { queryClient } from "@/shared/query-client";

export function useLogout() {
  const router = useRouter();
  const logoutQuery = useLogoutQuery();
  const logout = () => {
    logoutQuery.handleLogout(undefined, {
      onSuccess: () => {
        tokenService.clear();
        queryClient.removeQueries();
        router.push(Paths.login());
      },
    });
  };

  return { logout, isPending: logoutQuery.isPending };
}
