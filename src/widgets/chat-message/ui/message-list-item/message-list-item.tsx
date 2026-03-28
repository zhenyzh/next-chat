import { Box } from "@zhenyzh/common-ui/components";
import { SubStatusMessage } from "../sub-status-message";
import { NotificationOfNewMessages } from "../notification-of-new-messages";
import { firstIndexUnreadMessageUtils } from "../../lib/utils";
import { useStatusMessageConnectSocket } from "@/features/status-message/model/socket";
import { type Message, Messages } from "@/entities/messages";

type Props = {
  messages: Message[];
  isBottom?: boolean;
};

export const MessageListItem = ({ messages, isBottom }: Props) => {
  const { markAsDelivered, markAsRead } = useStatusMessageConnectSocket();
  const firstIndex = firstIndexUnreadMessageUtils(messages);

  return (
    <>
      {messages.map((message: Message, index) => (
        <Box key={message.id}>
          {firstIndex === index && !isBottom && <NotificationOfNewMessages />}
          <Messages
            message={message}
            subContent={
              <SubStatusMessage
                fromMe={message.fromMe}
                statusMessage={message.statusMessage}
                onDelivered={() => markAsDelivered(message.id, message.chatId)}
                onRead={() => markAsRead(message.id, message.chatId)}
                isBottom={isBottom}
              />
            }
          />
        </Box>
      ))}
    </>
  );
};
