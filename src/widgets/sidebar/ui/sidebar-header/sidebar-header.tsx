import Link from "next/link";
import clsx from "clsx";
import { Avatar, Box, Button } from "@zhenyzh/common-ui/components";
import { ChevronLeftIcon, ChevronRightIcon } from "@zhenyzh/common-ui/icons";
import { paths } from "@/shared/configs";
import LogoIcon from "@/shared/assets/images/logo.svg";
import s from "./sidebar-header.module.scss";

type Props = {
  collapsed: boolean;
  setCollapsed: () => void;
};

export function SideBarHeader({ collapsed, setCollapsed }: Props) {
  return (
    <Box className={s.header}>
      <Link href={paths.profile()} className={clsx(collapsed && s.hidden)}>
        <Avatar image={LogoIcon.src} variant="whole" size={50} />
      </Link>
      <Button onClick={() => setCollapsed()} className={s.toggleBtn}>
        {collapsed ? (
          <ChevronRightIcon width={20} height={20} />
        ) : (
          <ChevronLeftIcon width={20} height={20} />
        )}
      </Button>
    </Box>
  );
}
