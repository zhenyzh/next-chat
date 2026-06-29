import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { Card, Typography } from "@zhenyzh/common-ui/components";
import { linkItems } from "../../lib/utils";
import s from "./sidebar-navigation.module.scss";

export function SideBarNavigation({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();
  const linkItem = linkItems();

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
