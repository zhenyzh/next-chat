"use client";

import clsx from "clsx";
import { CheckCheck } from "lucide-react";
import { Box, Typography } from "@zhenyzh/common-ui/components";
import { UnreadIndicator } from "@/shared/ui";
import s from "./chat-sub-content.module.scss";

type Props = {
  message: string | null;
  isRead?: boolean;
  countMessage?: number;
};

export function ChatSubContent({ message, isRead, countMessage }: Props) {
  return (
    <Box className={clsx(s.container, s.shrink)}>
      <Typography variant="label" className={s.ellipsis}>
        {message}
      </Typography>
      <Box className={s.shrink}>
        {isRead || !countMessage ? (
          <CheckCheck />
        ) : (
          <UnreadIndicator count={countMessage} />
        )}
      </Box>
    </Box>
  );
}
