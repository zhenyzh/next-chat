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
import { useModal } from "@/shared/hooks";
import s from "./add-dropdown-menu.module.scss";

export function AddDropdownMenu() {
  const { isOpen, handleOpen, handleClose } = useModal();
  const { logout, isPending } = useLogout();

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
      {isOpen && <AddUserAvatar onClose={handleClose} />}
    </>
  );
}
