"use client";

import React, { ReactNode } from "react";
import { Box } from "@zhenyzh/common-ui/components";
import { AnimationLogoIcon } from "@zhenyzh/common-ui/icons";
import { Sidebar } from "@/widgets/sidebar";
import { useUsersStatusSocket } from "@/features/users-status/model/socket";
import { useRefresh } from "@/shared/api";
import s from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const loading = useRefresh();
  useUsersStatusSocket();

  if (loading) return <AnimationLogoIcon />;

  return (
    <Box className={s.container}>
      <Sidebar />
      <Box className={s.main}>{children}</Box>
    </Box>
  );
}
