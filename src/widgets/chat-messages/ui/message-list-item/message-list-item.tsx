import { Box } from "@zhenyzh/common-ui/components";
import { SubStatusMessage } from "../sub-status-message";
import { UnreadMessages } from "../unread-messages";
import { firstIndexUnreadMessage } from "../../lib/utils";
import { useStatusMessageConnection } from "@/features/status-message/model/socket";
import { Messages } from "@/entities/messages/containers";
import { type Message } from "@/entities/messages/model/types";

type Props = {
  messages: Message[];
  isBottom?: boolean;
};

export const MessageListItem = ({ messages, isBottom }: Props) => {
  const { markAsDelivered, markAsRead } = useStatusMessageConnection();
  const firstIndex = firstIndexUnreadMessage(messages);

  return (
    <>
      {messages.map((msg: Message, index) => (
        <Box key={msg.id}>
          {firstIndex === index && !isBottom && <UnreadMessages />}
          <Messages
            message={msg}
            subContent={
              <SubStatusMessage
                fromMe={msg.fromMe}
                statusMessage={msg.statusMessage}
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
        </Box>
      ))}
    </>
  );
};
