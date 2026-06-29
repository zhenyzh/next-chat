import clsx from "clsx";
import { Box } from "@zhenyzh/common-ui/components";
import { SideBarHeader, SideBarNavigation, SidebarLogout } from "../ui";
import { useCollapsed } from "../model/hooks";
import s from "./sidebar.module.scss";

export function Sidebar() {
  const { collapsed, setCollapsed } = useCollapsed();

  return (
    <Box className={s.container}>
      <Box
        as="aside"
        className={clsx(s.sidebar, collapsed ? s.collapsed : s.expanded)}
      >
        <SideBarHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <SideBarNavigation collapsed={collapsed} />
      </Box>
      <SidebarLogout collapsed={collapsed} />
    </Box>
  );
}
