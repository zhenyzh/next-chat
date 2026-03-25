import { useRouter } from "next/navigation";
import { useLogoutMutation } from "./use-logout-mutation";
import { Paths } from "@/shared/configs";
import { useTokenService } from "@/shared/token-service";
import { queryClient } from "@/shared/query-client";
import { getSocket } from "@/shared/socket";

export function useLogout() {
  const router = useRouter();
  const mutation = useLogoutMutation();
  const tokenService = useTokenService();
  const socket = getSocket();

  const logout = () => {
    mutation.handleLogout(undefined, {
      onSuccess: () => {
        tokenService.clear();
        socket.disconnect();
        queryClient.removeQueries();
        router.push(Paths.login());
      },
    });
  };

  return { logout, isPending: mutation.isPending };
}
