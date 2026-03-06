import { LogOut } from "lucide-react";
import { useLogout } from "@/features/auth/logout/model/hooks";

export function Logout() {
  const { logout } = useLogout();

  return <LogOut onClick={logout} />;
}
