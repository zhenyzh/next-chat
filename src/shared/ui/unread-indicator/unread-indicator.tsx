"use client";

import { Box, Typography } from "@zhenyzh/common-ui/components";
import s from "./unread-indicator.module.scss";

export type UnreadIndicatorProps = {
  count?: number;
};

export function UnreadIndicator({ count = 0 }: UnreadIndicatorProps) {
  return (
    <Box className={s.container}>
      <Typography className={s.indicator}>
        {count > 99 ? "99+" : count}
      </Typography>
    </Box>
  );
}
