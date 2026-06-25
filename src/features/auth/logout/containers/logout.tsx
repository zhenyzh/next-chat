import { Button } from "@zhenyzh/common-ui/components";
import { LogOutIcon } from "@zhenyzh/common-ui/icons";
import { useLogout } from "../model/hooks";
import s from "./logout.module.scss";

export function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <Button className={s.container} disabled={isPending} onClick={logout}>
      <LogOutIcon width={28} height={28} />
    </Button>
  );
}
