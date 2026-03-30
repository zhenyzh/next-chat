"use client";

import clsx from "clsx";
import { Box, Typography } from "@zhenyzh/common-ui/components";
import { SubStatusMessage } from "../sub-status-message";
import type { StatusMessage } from "@/entities/messages";
import { UnreadIndicator } from "@/shared/ui";
import s from "./chat-sub-content.module.scss";

type Props = {
  message: string | null;
  status: StatusMessage;
  countMessage?: number;
  typedMe?: boolean;
};

export function ChatSubContent({
  message,
  status,
  countMessage,
  typedMe,
}: Props) {
  const typedLastMe = typedMe && `Вы:${message}`;

  return (
    <Box className={clsx(s.container, s.shrink)}>
      <Typography variant="label" className={s.ellipsis}>
        {typedLastMe || message}
      </Typography>
      <Box className={s.shrink}>
        {status?.isRead || !countMessage ? (
          <SubStatusMessage status={status} />
        ) : (
          <UnreadIndicator count={countMessage} />
        )}
      </Box>
    </Box>
  );
}
