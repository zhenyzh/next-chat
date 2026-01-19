import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LogoIcon from "@/shared/assets/images/logo.png";
import s from "./sidebar-header.module.scss";

type Props = {
  baseLink: string;
  collapsed: boolean;
  setCollapsed: (collapse: boolean) => void;
};

export function SideBarHeader({ baseLink, collapsed, setCollapsed }: Props) {
  return (
    <header className={s.header}>
      {!collapsed && (
        <Link href={baseLink}>
          <Image
            src={LogoIcon}
            alt="logo"
            width={50}
            height={50}
            loading="eager"
          />
        </Link>
      )}
      <button onClick={() => setCollapsed(!collapsed)} className={s.toggleBtn}>
        {collapsed ? (
          <ChevronRight width={20} height={20} />
        ) : (
          <ChevronLeft width={20} height={20} />
        )}
      </button>
    </header>
  );
}
