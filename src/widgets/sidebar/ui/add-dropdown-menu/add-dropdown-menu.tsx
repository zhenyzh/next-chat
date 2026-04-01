import { UserPen, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@zhenyzh/common-ui/components";
import { MoreIcon } from "@zhenyzh/common-ui/icons";
import { useLogout } from "@/features/auth/logout/model/hooks";
import { AddUserAvatar } from "@/features/add-user-avatar";
import { useCloseToCollapsed, useModal } from "@/shared/hooks";
import s from "./add-dropdown-menu.module.scss";

type Props = {
  collapsed?: boolean;
};

export function AddDropdownMenu({ collapsed }: Props) {
  const { isOpen, handleOpen, handleClose } = useModal();
  const { logout, isPending } = useLogout();

  useCloseToCollapsed({ collapsed, onClose: handleOpen });

  return (
    <>
      <DropdownMenu className={s.container}>
        <DropdownMenuTrigger>
          <MoreIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleOpen}>
            <UserPen />
            Добавить фото
          </DropdownMenuItem>
          <DropdownMenuItem disabled={isPending} onClick={logout}>
            <LogOut />
            Выход
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {isOpen && <AddUserAvatar collapsed={collapsed} onClose={handleClose} />}
    </>
  );
}
