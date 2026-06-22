import { SubDateContent } from "../ui/sub-time-content";
import { MessageListItem } from "../ui/message-list-item";
import { TypingIndicator } from "../ui/typing-indicator";
import { DownButton } from "../ui/down-button";
import { useMessagesList } from "../model/hooks";
import { useScrollBottom } from "../model/hooks";
import { useTyping } from "@/features/typing/model/hooks";
import { MessagesSkeleton } from "@/entities/messages/ui/message-skeleton";
import { useCurrentChat } from "@/entities/chat/model/hooks";
import { useSearchQueryParams } from "@/shared/hooks";
import { List, ScrollBar, EmptyContent, VisibleWrapper } from "@/shared/ui";
import s from "./chat-messages-list.module.scss";

export function ChatMessagesList() {
  const {
    query: { recipientId },
  } = useSearchQueryParams();
  const { chatId } = useCurrentChat();
  const { messages, isLoading } = useMessagesList();
  const { isTyping } = useTyping(+recipientId);
  const { scrollRef, isBottom, onBottom } = useScrollBottom();

  return (
    <ScrollBar className={s.scroll} ref={scrollRef}>
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
            <VisibleWrapper visible={!!chatId && !isBottom}>
              <DownButton onBottom={onBottom} />
            </VisibleWrapper>
            <VisibleWrapper visible={isTyping && isBottom}>
              <TypingIndicator />
            </VisibleWrapper>
          </>
        }
      />
    </ScrollBar>
  );
}
