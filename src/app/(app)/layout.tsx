"use client";

import { Box } from "@zhenyzh/common-ui/components";
import { Sidebar } from "@/widgets/sidebar";
import s from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box className={s.container}>
      <Sidebar />
      <Box className={s.main}>{children}</Box>
    </Box>
  );
}
