import { SubDateContent } from "../ui/sub-time-content";
import { MessageListItem } from "../ui/message-list-item";
import { EmptyContent } from "../ui/empty-content";
import { useGetMessages, useScrollToBottom } from "../model/hooks";
import { MessagesSkeleton } from "@/entities/messages";
import { List, ScrollBar } from "@/shared/ui";
import s from "./chat-message-list.module.scss";

export function ChatMessageList() {
  const { scrollRef, refWatchBottom } = useScrollToBottom();
  const { messages, isLoading, hasChatId } = useGetMessages();

  return (
    <ScrollBar ref={scrollRef}>
      <List
        data={messages}
        className={s.container}
        isLoading={isLoading}
        skeleton={<MessagesSkeleton />}
        renderItem={(group) => (
          <>
            <SubDateContent date={group.date} />
            <MessageListItem
              messages={group.messages}
              refWatchBottom={refWatchBottom}
            />
          </>
        )}
        emptyComponent={
          <EmptyContent
            hasMessages={!!messages?.length}
            hasChatId={hasChatId}
          />
        }
      />
    </ScrollBar>
  );
}
