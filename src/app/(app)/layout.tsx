"use client";

import React, { ReactNode } from "react";
import { Box } from "@zhenyzh/common-ui/components";
import { AnimationLogoIcon } from "@zhenyzh/common-ui/icons";
import { Sidebar } from "@/widgets/sidebar";
import { useSubscribeUsersStatus } from "@/features/users-status/model/socket";
import { useInitializeUser } from "@/entities/user/model/hooks";
import { useRefresh } from "@/shared/api";
import s from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const loadingRefresh = useRefresh();
  const loadingUser = useInitializeUser();
  useSubscribeUsersStatus();

  if (loadingRefresh || loadingUser) return <AnimationLogoIcon />;

  return (
    <Box className={s.container}>
      <Sidebar />
      <Box className={s.main}>{children}</Box>
    </Box>
  );
}
