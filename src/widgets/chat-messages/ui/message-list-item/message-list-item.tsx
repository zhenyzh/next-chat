import { SubStatusMessage } from "../sub-status-message";
import { UnreadMessages } from "../unread-messages";
import { firstIndexUnreadMessage } from "../../lib/utils";
import { useMarkStatusMessage } from "@/features/status-message/model/socket";
import { Messages } from "@/entities/messages/containers";
import { type Message } from "@/entities/messages/model/types";
import { List } from "@/shared/ui";

type Props = {
  messages: Message[];
  isBottom?: boolean;
};

export function MessageListItem({ messages, isBottom }: Props) {
  const { markAsDelivered, markAsRead } = useMarkStatusMessage();
  const firstIndex = firstIndexUnreadMessage(messages);

  return (
    <List
      data={messages}
      getKey={(item) => `${item.time}-${item.id}`}
      renderItem={(msg, index) => (
        <>
          {firstIndex === index && !isBottom && <UnreadMessages />}
          <Messages
            message={msg}
            subContent={
              <SubStatusMessage
                fromMe={msg.fromMe}
                status={msg.statusMessage}
                onDelivered={() =>
                  markAsDelivered({ messageId: msg.id, chatId: msg.chatId })
                }
                onRead={() =>
                  markAsRead({ messageId: msg.id, chatId: msg.chatId })
                }
                isBottom={isBottom}
              />
            }
          />
        </>
      )}
    />
  );
}
