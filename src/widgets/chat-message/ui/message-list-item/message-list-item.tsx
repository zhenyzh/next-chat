import { SubStatusMessage } from "../sub-check-message";
import { useStatusMessageConnectSocket } from "@/features/status-message/model/socket";
import { type Message, Messages } from "@/entities/messages";

type Props = {
  messages: Message[];
  isBottom?: boolean;
};

export const MessageListItem = ({ messages, isBottom }: Props) => {
  const { markAsDelivered, markAsRead } = useStatusMessageConnectSocket();

  return (
    <>
      {messages.map((message: Message) => (
        <Messages
          key={message.id}
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
      ))}
    </>
  );
};
