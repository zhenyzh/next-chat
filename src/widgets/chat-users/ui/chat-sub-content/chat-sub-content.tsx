import clsx from "clsx";
import { Box, Typography } from "@zhenyzh/common-ui/components";
import { SubStatusMessage } from "../sub-status-message";
import type {
  FileAttach,
  StatusMessage,
} from "@/entities/messages/model/types";
import { UnreadIndicator } from "@/shared/ui";
import s from "./chat-sub-content.module.scss";
import { lastMessage } from "@/widgets/chat-users/lib/utils";

type Props = {
  message: string | null;
  attachments: FileAttach[] | null;
  status: StatusMessage;
  countMessage: number;
  typedI: boolean;
};

export function ChatSubContent({
  message,
  attachments,
  status,
  countMessage,
  typedI,
}: Props) {
  const lastMsg = lastMessage(message, attachments);
  const typedLastI = typedI && `Вы: ${lastMsg}`;

  return (
    <Box className={clsx(s.container, s.shrink)}>
      <Typography variant="label" className={s.ellipsis}>
        {typedLastI || lastMsg}
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
