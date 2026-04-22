import clsx from "clsx";
import { Box, Typography } from "@zhenyzh/common-ui/components";
import { SubStatusMessage } from "../sub-status-message";
import type { StatusMessage } from "@/entities/messages/model/types";
import { UnreadIndicator } from "@/shared/ui";
import s from "./chat-sub-content.module.scss";

type Props = {
  message: string | null;
  status: StatusMessage;
  countMessage: number;
  typedI: boolean;
};

export function ChatSubContent({
  message,
  status,
  countMessage,
  typedI,
}: Props) {
  const typedLastI = typedI && `Вы:${message}`;

  return (
    <Box className={clsx(s.container, s.shrink)}>
      <Typography variant="label" className={s.ellipsis}>
        {typedLastI || message}
      </Typography>
      <Box className={s.shrink}>
        {!countMessage ? (
          <SubStatusMessage status={status} />
        ) : (
          <UnreadIndicator count={countMessage} />
        )}
      </Box>
    </Box>
  );
}
