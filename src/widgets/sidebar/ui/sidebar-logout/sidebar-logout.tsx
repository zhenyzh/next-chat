import clsx from "clsx";
import { Box, Typography } from "@zhenyzh/common-ui/components";
import { Logout } from "@/features/auth/logout";
import { useHasUserStatus } from "@/features/users-status/model/hooks";
import { useGetUserQuery } from "@/entities/user/model/hooks";
import { UserPreview, UserPreviewSkeleton } from "@/shared/ui";
import s from "./sidebar-logout.module.scss";

type Props = {
  collapsed: boolean;
};

export function SidebarLogout({ collapsed }: Props) {
  const { user, isLoading } = useGetUserQuery();
  const isOnline = useHasUserStatus(user?.id);

  return (
    <>
      <Box className={clsx(s.container, collapsed && s.hidden, s.hiddenMobile)}>
        {isLoading ? (
          <Box style={{ width: "15rem" }}>
            <UserPreviewSkeleton />
          </Box>
        ) : (
          <UserPreview
            name={user?.name}
            isOnline={isOnline}
            rightInfoSlot={
              <Box className={s.rightInfo}>
                <Logout />
              </Box>
            }
            subInfoSlot={
              <Typography className={s.subInfo}>{user?.email}</Typography>
            }
          />
        )}
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
