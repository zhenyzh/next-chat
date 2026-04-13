import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@zhenyzh/common-ui/components";
import {
  CameraIcon,
  EllipsisIcon,
  UserRoundXIcon,
  LogOutIcon,
} from "@zhenyzh/common-ui/icons";
import { useLogout } from "@/features/auth/logout/model/hooks";
import { AddUserAvatar } from "@/features/add-user-avatar/containers";
import { useModal } from "@/shared/hooks";
import s from "./add-dropdown-menu.module.scss";

export function AddDropdownMenu() {
  const { isOpen, handleOpen, handleClose } = useModal();
  const { logout, isPending } = useLogout();

  const items = [
    { label: "Добавить фото", icon: CameraIcon, onClick: handleOpen },
    { label: "Удалить профиль", icon: UserRoundXIcon },
    {
      label: "Выйти",
      icon: LogOutIcon,
      onClick: logout,
      disabled: isPending,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={true}>
        <Button className={s.container}>
          <EllipsisIcon width={28} height={28} />
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
      {isOpen && <AddUserAvatar onClose={handleClose} />}
    </DropdownMenu>
  );
}
