import clsx from "clsx";
import { Box, Typography } from "@zhenyzh/common-ui/components";
import { Logout } from "@/features/auth/logout";
import { UserPreview } from "@/shared/ui";
import s from "./sidebar-logout.module.scss";

type Props = {
  collapsed: boolean;
};

export function SidebarLogout({ collapsed }: Props) {
  return (
    <>
      <Box className={clsx(s.container, collapsed && s.hidden, s.hiddenMobile)}>
        <UserPreview
          name={"Иван"}
          rightInfoSlot={
            <Box className={s.rightInfo}>
              <Logout />
            </Box>
          }
          subInfoSlot={
            <Typography className={s.subInfo}>{"arv@bk.ru"}</Typography>
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
        <Logout />
      </Box>
    </>
  );
}
