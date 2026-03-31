import clsx from "clsx";
import { Box, Typography } from "@zhenyzh/common-ui/components";
import { AddDropdownMenu } from "../add-dropdown-menu";
import { Logout } from "@/features/auth/logout";
import { useHasUserStatus } from "@/features/users-status/model/hooks";
import { useUser } from "@/entities/user/model/store";
import { UserPreview } from "@/shared/ui";
import { useModal } from "@/shared/hooks";
import s from "./sidebar-logout.module.scss";

type Props = {
  collapsed: boolean;
};

export function SidebarLogout({ collapsed }: Props) {
  const user = useUser();
  const isOnline = useHasUserStatus(user.id);
  const { isOpen: show, handle: handleShow } = useModal();

  return (
    <>
      <Box className={clsx(s.container, collapsed && s.hidden, s.hiddenMobile)}>
        <UserPreview
          name={user.name}
          isOnline={isOnline}
          onClick={() => handleShow()}
          rightInfoSlot={
            <Box className={s.rightInfo}>
              <Logout />
            </Box>
          }
          subInfoSlot={
            <Typography className={s.subInfo}>{user.email}</Typography>
          }
        />
        {show && <AddDropdownMenu />}
      </Box>
      <Box
        className={clsx(
          s.container,
          s.oneButton,
          !collapsed && s.hidden,
          s.visibleMobile,
        )}
      >
        <Logout />
      </Box>
    </>
  );
}
