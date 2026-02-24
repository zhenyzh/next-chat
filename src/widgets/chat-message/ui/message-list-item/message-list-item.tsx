import { type Message, Messages } from "@/entities/messages";

type Props = {
  messages: Message[];
};

export const MessageListItem = ({ messages }: Props) => {
  return messages.map((message: Message) => (
    <Messages key={message.chatId + message.user.id} message={message} />
  ));
};
