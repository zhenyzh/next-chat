import { Box } from "@zhenyzh/common-ui/components";
import { SubDateContent } from "../ui/sub-time-content";
import { MessageListItem } from "../ui/message-list-item";
import { EmptyContent } from "../ui/empty-content";
import { TypingIndicator } from "../ui/typing-indicator";
import { useChatMessage, useScrollToBottom } from "../model/hooks";
import { useTypingUsersIds } from "@/features/typing/model/store";
import { MessagesSkeleton } from "@/entities/messages";
import { List, ScrollBar } from "@/shared/ui";

export function ChatMessageList() {
  const { messages, isLoading, hasChatId } = useChatMessage();
  const { scrollRef, refWatchBottom, isBottom } = useScrollToBottom();
  const typingUsersIds = useTypingUsersIds();

  return (
    <ScrollBar ref={scrollRef}>
      <List
        data={messages}
        isLoading={isLoading}
        skeleton={<MessagesSkeleton />}
        renderItem={(group) => (
          <>
            <SubDateContent date={group.date} />
            <MessageListItem messages={group.messages} />
          </>
        )}
        empty={
          <EmptyContent
            hasMessages={!!messages?.length}
            hasChatId={hasChatId}
          />
        }
      />
      {!!typingUsersIds.length && isBottom && <TypingIndicator />}
      <Box ref={refWatchBottom} style={{ height: 1 }} />
    </ScrollBar>
  );
}
