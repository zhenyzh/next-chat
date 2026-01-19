import Link from "next/link";
import clsx from "clsx";
import s from "./sidebar-navigation.module.scss";
import type { LinkType } from "@/widgets";

type Props = {
  linkItem: LinkType[];
  pathname: string;
  collapsed: boolean;
};

export function SidebarNavigation({ linkItem, pathname, collapsed }: Props) {
  return (
    <nav className={s.nav}>
      {linkItem.map((item) => {
        const active = pathname === item.link;
        return (
          <Link
            key={item.link}
            href={item.link}
            className={clsx(s.navItem, active && s.activeLink)}
          >
            <span className={s.navIcon}>{item.icon}</span>
            {!collapsed && <span className={s.navLabel}>{item.label}</span>}
          </Link>
        );
      })}
    </nav>
  );
}
