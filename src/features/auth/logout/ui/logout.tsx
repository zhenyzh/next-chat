import { LogOut } from "lucide-react";
import { Button } from "@zhenyzh/common-ui/components";
import { useLogout } from "@/features/auth/logout/model/hooks";
import s from "./logout.module.scss";

export function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <Button className={s.container} disabled={isPending}>
      <LogOut className={s.logout} width={28} height={28} onClick={logout} />
    </Button>
  );
}
