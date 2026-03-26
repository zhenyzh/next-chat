import { SubCheckMessage } from "../sub-check-message";
import { type Message, Messages } from "@/entities/messages";

type Props = {
  messages: Message[];
};

export const MessageListItem = ({ messages }: Props) => {
  return (
    <>
      {messages.map((message: Message) => (
        <Messages
          key={message.id}
          message={message}
          subContent={
            <SubCheckMessage
              fromMe={message.fromMe}
              statusMessage={message.statusMessage}
            />
          }
        />
      ))}
    </>
  );
};
