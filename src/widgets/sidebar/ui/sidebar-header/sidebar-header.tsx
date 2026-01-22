import Link from "next/link";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, Box, Button } from "@zhenyzh/common-ui/components";
import LogoIcon from "@/shared/assets/images/logo.svg";
import s from "./sidebar-header.module.scss";

type SideBarHeaderProps = {
  defaultLink: string;
  collapsed: boolean;
  setCollapsed: (collapse: boolean) => void;
};

export function SideBarHeader({
  defaultLink,
  collapsed,
  setCollapsed,
}: SideBarHeaderProps) {
  return (
    <Box className={s.header}>
      <Link href={defaultLink} className={clsx(collapsed && s.hidden)}>
        <Avatar image={LogoIcon.src} variant="whole" />
      </Link>
      <Button onClick={() => setCollapsed(!collapsed)} className={s.toggleBtn}>
        {collapsed ? (
          <ChevronRight width={20} height={20} />
        ) : (
          <ChevronLeft width={20} height={20} />
        )}
      </Button>
    </Box>
  );
}
