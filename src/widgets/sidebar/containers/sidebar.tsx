import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Box } from "@zhenyzh/common-ui/components";
import {
  MessageCircleMoreIcon,
  SettingsIcon,
  UserPenIcon,
} from "@zhenyzh/common-ui/icons";
import { SideBarHeader, SideBarNavigation, SidebarLogout } from "../ui";
import { useCollapsed } from "../model/hooks";
import type { LinkType } from "../model/types";
import { Paths } from "@/shared/configs";
import s from "./sidebar.module.scss";

export function Sidebar() {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useCollapsed();

  const linkItem: LinkType[] = [
    {
      link: Paths.profile(),
      label: "Профиль",
      icon: <UserPenIcon />,
    },
    {
      link: Paths.chat(),
      label: "Чат",
      icon: <MessageCircleMoreIcon />,
    },
    {
      link: Paths.settings(),
      label: "Настройки",
      icon: <SettingsIcon />,
    },
  ];

  return (
    <Box className={s.container}>
      <Box
        as="aside"
        className={clsx(s.sidebar, collapsed ? s.collapsed : s.expanded)}
      >
        <SideBarHeader
          defaultLink={Paths.profile()}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <SideBarNavigation
          linkItem={linkItem}
          pathname={pathname}
          collapsed={collapsed}
        />
      </Box>
      <SidebarLogout collapsed={collapsed} />
    </Box>
  );
}
