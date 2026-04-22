import clsx from "clsx";
import { Box, Typography } from "@zhenyzh/common-ui/components";
import { AddDropdownMenu } from "../add-dropdown-menu";
import { useHasUserStatus } from "@/features/users-status/model/hooks";
import { useUserLogin } from "@/entities/user/user-login/model/store";
import { CardPreview } from "@/shared/ui";
import { patchUrl } from "@/shared/configs";
import s from "./sidebar-logout.module.scss";

type Props = {
  collapsed?: boolean;
};

export function SidebarLogout({ collapsed }: Props) {
  const user = useUserLogin();
  const isOnline = useHasUserStatus(user.id);

  return (
    <>
      <Box className={clsx(s.container, collapsed && s.hidden, s.hiddenMobile)}>
        <CardPreview
          title={user.name}
          url={patchUrl(user.avatarUrl)}
          isOnline={isOnline}
          rightInfoSlot={
            <Box className={s.rightInfo}>
              <AddDropdownMenu />
            </Box>
          }
          subInfoSlot={
            <Typography className={s.subInfo}>{user.email}</Typography>
          }
        />
      </Box>
      <Box
        className={clsx(
          s.container,
          s.oneButton,
          !collapsed && s.hidden,
          s.visibleMobile,
        )}
      >
        <AddDropdownMenu />
      </Box>
    </>
  );
}
