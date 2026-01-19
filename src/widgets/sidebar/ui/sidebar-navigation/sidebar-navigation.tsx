import Link from "next/link";
import clsx from "clsx";
import s from "./sidebar-navigation.module.scss";
import type { LinkType } from "@/widgets/sidebar/model";

type Props = {
  linkItem: LinkType[];
  pathname: string;
  collapsed: boolean;
};

export function SidebarNavigation({ linkItem, pathname, collapsed }: Props) {
  return (
    <nav className={s.nav}>
      {linkItem.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
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
