"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { MessageCircleMore, Settings, UserPen } from "lucide-react";
import { Box } from "@zhenyzh/common-ui/components";
import {
  SideBarHeader,
  SideBarNavigation,
  SidebarLogout,
} from "@/widgets/sidebar/ui";
import type { LinkType } from "@/widgets/sidebar/model";
import { Paths } from "@/shared/configs";
import s from "./sidebar.module.scss";

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const linkItem: LinkType[] = [
    {
      link: Paths.profile(),
      label: "Профиль",
      icon: <UserPen />,
    },
    {
      link: Paths.chat(),
      label: "Чат",
      icon: <MessageCircleMore />,
    },
    {
      link: Paths.settings(),
      label: "Настройки",
      icon: <Settings />,
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
