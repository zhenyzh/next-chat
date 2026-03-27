import { useRouter } from "next/navigation";
import { useLogoutMutation } from "./use-logout-mutation";
import { useUserActions } from "@/entities/user/model/store";
import { Paths } from "@/shared/configs";
import { useTokenService } from "@/shared/token-service";
import { queryClient } from "@/shared/query-client";
import { getSocket } from "@/shared/socket";

export function useLogout() {
  const router = useRouter();
  const mutation = useLogoutMutation();
  const tokenService = useTokenService();
  const { clearUser } = useUserActions();
  const socket = getSocket();

  const logout = () => {
    mutation.handleLogout(undefined, {
      onSuccess: () => {
        tokenService.clear();
        socket.disconnect();
        clearUser();
        queryClient.removeQueries();
        router.push(Paths.login());
      },
    });
  };

  return { logout, isPending: mutation.isPending };
}
