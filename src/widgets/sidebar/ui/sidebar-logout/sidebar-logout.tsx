import { Box } from "@zhenyzh/common-ui/components";
import { Logout } from "@/features/auth/logout";
import s from "./sidebar-logout.module.scss";

export function SidebarLogout() {
  return (
    <Box className={s.container}>
      <Logout />
    </Box>
  );
}
