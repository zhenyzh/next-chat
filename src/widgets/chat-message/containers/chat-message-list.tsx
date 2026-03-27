import { Box } from "@zhenyzh/common-ui/components";
import { SubDateContent } from "../ui/sub-time-content";
import { MessageListItem } from "../ui/message-list-item";
import { EmptyContent } from "../ui/empty-content";
import { TypingIndicator } from "../ui/typing-indicator";
import { useChatMessage, useScrollToBottom } from "../model/hooks";
import { useTypingUsersIds } from "@/features/typing/model/store";
import { MessagesSkeleton } from "@/entities/messages";
import { List, ScrollBar } from "@/shared/ui";
import s from "./chat-message-list.module.scss";

export function ChatMessageList() {
  const { messages, isLoading, hasChatId } = useChatMessage();
  const { scrollRef, refWatchBottom, isBottom } = useScrollToBottom();
  const typingUsersIds = useTypingUsersIds();

  return (
    <ScrollBar className={s.scrollList} ref={scrollRef}>
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
          <EmptyContent
            hasMessages={!!messages?.length}
            hasChatId={hasChatId}
          />
        }
        footer={
          <>
            {!!typingUsersIds.length && <TypingIndicator />}
            <Box ref={refWatchBottom} style={{ height: 1 }} />
          </>
        }
      />
    </ScrollBar>
  );
}
