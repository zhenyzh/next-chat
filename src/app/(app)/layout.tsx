"use client";

import { Box } from "@zhenyzh/common-ui/components";
import { AnimationLogoIcon } from "@zhenyzh/common-ui/icons";
import { Sidebar } from "@/widgets/sidebar";
import { useUserStatusSocket } from "@/entities/user/model/socket";
import { useRefresh } from "@/shared/api";
import s from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loading = useRefresh();
  useUserStatusSocket();

  if (loading) return <AnimationLogoIcon />;

  return (
    <Box className={s.container}>
      <Sidebar />
      <Box className={s.main}>{children}</Box>
    </Box>
  );
}
