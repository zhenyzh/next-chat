"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { MessageCircleMore, Settings, UserPen } from "lucide-react";

import type { LinkType } from "@/widgets";
import { ROUTES } from "@/shared";

import { SideBarHeader } from "./sidebar-header";
import { SideBarNavigation } from "./sidebar-navigation";

import s from "./sidebar.module.scss";

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const linkItem: LinkType[] = [
    {
      link: ROUTES.profile,
      label: "Профиль",
      icon: <UserPen />,
      collapsed: collapsed,
    },
    {
      link: ROUTES.chat,
      label: "Чат",
      icon: <MessageCircleMore />,
      collapsed: collapsed,
    },
    {
      link: ROUTES.settings,
      label: "Настройки",
      icon: <Settings />,
      collapsed: collapsed,
    },
  ] as const;

  return (
    <aside className={clsx(s.sidebar, collapsed ? s.collapsed : s.expanded)}>
      <SideBarHeader
        defaultLink={ROUTES.profile}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <SideBarNavigation
        linkItem={linkItem}
        pathname={pathname}
        collapsed={collapsed}
      />
    </aside>
  );
}
