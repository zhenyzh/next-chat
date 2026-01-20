import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button, Card } from "@zhenyzh/common-ui/components";
import LogoIcon from "@/shared/assets/images/logo.png";
import s from "./sidebar-header.module.scss";

type Props = {
  defaultLink: string;
  collapsed: boolean;
  setCollapsed: (collapse: boolean) => void;
};

export function SideBarHeader({ defaultLink, collapsed, setCollapsed }: Props) {
  return (
    <Card className={s.header}>
      <Link href={defaultLink} className={clsx(collapsed && s.hidden)}>
        <Image
          src={LogoIcon}
          alt="logo"
          width={50}
          height={50}
          priority
          className={s.logo}
        />
      </Link>
      <Button onClick={() => setCollapsed(!collapsed)} className={s.toggleBtn}>
        {collapsed ? (
          <ChevronRight width={20} height={20} />
        ) : (
          <ChevronLeft width={20} height={20} />
        )}
      </Button>
    </Card>
  );
}
