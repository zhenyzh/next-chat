import { Box } from "@zhenyzh/common-ui/components";
import { SubDateContent } from "../ui/sub-time-content";
import { MessageListItem } from "../ui/message-list-item";
import { TypingIndicator } from "../ui/typing-indicator";
import { DownButton } from "../ui/down-button";
import { useMessagesList } from "../model/hooks";
import { useScrollToBottom } from "../model/hooks";
import { useChatMessageSubscribes } from "../model/socket";
import { useTypingMe } from "@/features/typing/model/hooks";
import { MessagesSkeleton } from "@/entities/messages/ui/message-skeleton";
import { useSearchQueryParams } from "@/shared/hooks";
import { List, ScrollBar, EmptyContent } from "@/shared/ui";
import s from "./chat-messages-list.module.scss";

export function ChatMessagesList() {
  useChatMessageSubscribes();

  const {
    query: { recipientId },
  } = useSearchQueryParams();

  const { messages, hasChatId, isLoading } = useMessagesList();
  const { isTyping } = useTypingMe();
  const { scrollBarRef, refWatchBottom, isBottom, handleScrollToBottom } =
    useScrollToBottom();

  return (
    <ScrollBar className={s.scrollList} ref={scrollBarRef}>
      <List
        data={messages}
        isLoading={isLoading}
        skeleton={<MessagesSkeleton />}
        className={s.list}
        footerClassName={s.footer}
        renderItem={(group) => (
          <>
            <SubDateContent date={group.date} />
            <MessageListItem messages={group.messages} isBottom={isBottom} />
          </>
        )}
        empty={
          !recipientId && (
            <EmptyContent label="Кликните на список чтобы увидеть чат" />
          )
        }
        footer={
          <>
            {hasChatId && !isBottom && (
              <DownButton onClick={handleScrollToBottom} />
            )}
            {isTyping && isBottom && <TypingIndicator />}
            <Box ref={refWatchBottom} style={{ height: 1 }} />
          </>
        }
      />
    </ScrollBar>
  );
}
