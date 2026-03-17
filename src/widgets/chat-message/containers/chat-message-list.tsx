import { SubDateContent } from "../ui/sub-time-content";
import { MessageListItem } from "../ui/message-list-item";
import { EmptyContent } from "../ui/empty-content";
import { useGetMessages, useScrollToBottom } from "../model/hooks";
import { List, ScrollBar } from "@/shared/ui";
import s from "./chat-message-list.module.scss";

export function ChatMessageList() {
  const { scrollRef } = useScrollToBottom();
  const { messages, hasChatId, isLoading } = useGetMessages();

  return (
    <ScrollBar ref={scrollRef}>
      <List
        data={messages}
        isLoading={isLoading}
        className={s.container}
        renderItem={(group) => (
          <>
            <SubDateContent date={group.data} />
            <MessageListItem messages={group.messages} />
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
