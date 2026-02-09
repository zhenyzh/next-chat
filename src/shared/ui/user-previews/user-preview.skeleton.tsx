"use client";

import { Box, Skeleton } from "@zhenyzh/common-ui/components";
import s from "./user-preview.skeleton.module.scss";

export function UserPreviewSkeleton() {
  return (
    <Box className={s.container}>
      <Box className={s.content}>
        <Skeleton circle width={55} height={55} className={s.avatar} />
        <Box className={s.infoSection}>
          <Box className={s.basicInfo}>
            <Skeleton width="40%" height={20} />
            <Skeleton width={60} height={16} />
          </Box>
          <Box className={s.basicInfo}>
            <Skeleton width="70%" height={15} />
            <Skeleton circle width={16} height={16} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
