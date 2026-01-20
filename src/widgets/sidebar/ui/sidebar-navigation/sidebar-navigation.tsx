import Link from "next/link";
import clsx from "clsx";
import { Card, Typography } from "@zhenyzh/common-ui/components";
import type { LinkType } from "@/widgets";
import s from "./sidebar-navigation.module.scss";

type Props = {
  linkItem: LinkType[];
  pathname: string;
  collapsed: boolean;
};

export function SideBarNavigation({ linkItem, pathname, collapsed }: Props) {
  return (
    <Card as="nav" className={s.nav}>
      {linkItem.map((item) => {
        const active = pathname === item.link;
        return (
          <Link
            key={item.link}
            href={item.link}
            className={clsx(s.navItem, active && s.activeLink)}
          >
            <Typography className={s.navIcon}>{item.icon}</Typography>
            {!collapsed && (
              <Typography className={s.navLabel}>{item.label}</Typography>
            )}
          </Link>
        );
      })}
    </Card>
  );
}
