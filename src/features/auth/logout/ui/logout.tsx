import { redirect } from "next/navigation";
import { LogOut } from "lucide-react";
import { useLogout } from "@/features/auth/logout/model";
import { Paths } from "@/shared/configs";

export function Logout() {
  const logout = useLogout();

  const onLogout = () => {
    logout.handleLogout(undefined, {
      onSuccess: () => redirect(Paths.login()),
    });
  };

  return <LogOut onClick={onLogout} />;
}
