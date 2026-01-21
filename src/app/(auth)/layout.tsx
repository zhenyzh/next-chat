"use client";

import { Box } from "@zhenyzh/common-ui/components";
import s from "./layout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Box className={s.container}>{children}</Box>;
}
