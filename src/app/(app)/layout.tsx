"use client";

import React, { ReactNode } from "react";
import { Box } from "@zhenyzh/common-ui/components";
import { AnimationLogoIcon } from "@zhenyzh/common-ui/icons";
import { Sidebar } from "@/widgets/sidebar/containers";
import { useSubscribeToUsersStatus } from "@/features/users-status/model/socket";
import { useSubscribeToUserAvatarUpdate } from "@/features/add-user-avatar/model/socket";
import { useInitializeUserLogin } from "@/entities/user/user-login/model/hooks";
import { useSocketConnect } from "@/shared/socket";
import { useRefresh } from "@/shared/api";
import s from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const loadingRefresh = useRefresh();
  const loadingUser = useInitializeUserLogin();
  useSocketConnect();
  useSubscribeToUsersStatus();
  useSubscribeToUserAvatarUpdate();

  if (loadingRefresh || loadingUser) return <AnimationLogoIcon />;

  return (
    <Box className={s.container}>
      <Sidebar />
      <Box className={s.main}>{children}</Box>
    </Box>
  );
}
