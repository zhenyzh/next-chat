import clsx from "clsx";
import { Box, Typography } from "@zhenyzh/common-ui/components";
import { SubStatusMessage } from "../sub-status-message";
import { TypingIndicator } from "../typing-indicator";
import { lastMessage } from "../../lib/utils";
import { useTyping } from "@/features/typing/model/hooks";
import type {
  FileAttach,
  StatusMessage,
} from "@/entities/messages/model/types";
import { UnreadIndicator } from "@/shared/ui";
import s from "./chat-sub-content.module.scss";

type Props = {
  chatUserId: number;
  message: string | null;
  attachments: FileAttach[] | null;
  audio: FileAttach | null;
  status: StatusMessage;
  countMessage: number;
  typedI: boolean;
};

export function ChatSubContent({
  chatUserId,
  message,
  attachments,
  audio,
  status,
  countMessage,
  typedI,
}: Props) {
  const { isTyping } = useTyping(chatUserId);
  const lastMsg = lastMessage(message, attachments, audio);
  const typedLastI = typedI && `Вы: ${lastMsg}`;

  return (
    <Box className={clsx(s.container, s.shrink)}>
      <Typography variant="label" className={s.ellipsis}>
        {isTyping ? <TypingIndicator /> : typedLastI || lastMsg}
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
