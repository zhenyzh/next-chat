import { useRouter } from "next/navigation";
import { useLogoutAction } from "./use-logout-action";
import { useUserActions } from "@/entities/user/model/store";
import { paths } from "@/shared/configs";
import { useTokenService } from "@/shared/service";
import { queryClient } from "@/shared/api";
import { getSocket } from "@/shared/socket";
import { successToast } from "@/shared/utils";

export function useLogout() {
  const router = useRouter();
  const mutation = useLogoutAction();
  const tokenService = useTokenService();
  const { clearUser } = useUserActions();
  const socket = getSocket();

  const logout = () => {
    mutation.handleLogout(undefined, {
      onSuccess: (data) => {
        tokenService.clear();
        socket.disconnect();
        clearUser();
        queryClient.removeQueries();
        router.push(paths.login());
        successToast(data.message);
      },
    });
  };

  return { logout, isPending: mutation.isPending };
}
