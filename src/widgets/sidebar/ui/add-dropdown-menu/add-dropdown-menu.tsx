import { Camera, Ellipsis, UserRoundX, LogOut } from "lucide-react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@zhenyzh/common-ui/components";
import { useLogout } from "@/features/auth/logout/model/hooks";
import { AddUserAvatar } from "@/features/add-user-avatar/containers";
import { useModal } from "@/shared/hooks";
import s from "./add-dropdown-menu.module.scss";

export function AddDropdownMenu() {
  const { isOpen, handleOpen, handleClose } = useModal();
  const { logout, isPending } = useLogout();

  const items = [
    { label: "Добавить фото", icon: Camera, onClick: handleOpen },
    { label: "Удалить профиль", icon: UserRoundX },
    {
      label: "Выйти",
      icon: LogOut,
      onClick: logout,
      disabled: isPending,
    },
  ];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild={true}>
          <Button className={s.container}>
            <Ellipsis width={28} height={28} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {items.map((item, i) => (
            <DropdownMenuItem
              key={i}
              onClick={item.onClick}
              disabled={item.disabled}
            >
              <item.icon />
              <span>{item.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {isOpen && <AddUserAvatar onClose={handleClose} />}
    </>
  );
}
