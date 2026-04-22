"use client";

import React, { ReactNode } from "react";
import { Box } from "@zhenyzh/common-ui/components";
import { AnimationLogoIcon } from "@zhenyzh/common-ui/icons";
import { useChatSocketProvider } from "../use-chat-socket-provider";
import { Sidebar } from "@/widgets/sidebar/containers";
import { useInitializeUser } from "@/entities/user/user/model/hooks";
import { useRefresh } from "@/shared/api";
import s from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const loadingRefresh = useRefresh();
  const loadingUser = useInitializeUser();
  useChatSocketProvider();

  if (loadingRefresh || loadingUser) return <AnimationLogoIcon />;

  return (
    <Box className={s.container}>
      <Sidebar />
      <Box className={s.main}>{children}</Box>
    </Box>
  );
}
