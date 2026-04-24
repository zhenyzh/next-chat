import { useRouter } from "next/navigation";
import { useLogoutAction } from "./use-logout-action";
import { useUserActions } from "@/entities/user/model/store";
import { Paths } from "@/shared/configs";
import { useTokenService } from "@/shared/service";
import { queryClient } from "@/shared/api";
import { getSocket } from "@/shared/socket";

export function useLogout() {
  const router = useRouter();
  const mutation = useLogoutAction();
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
