import type { Ref } from "react";
import { Box } from "@zhenyzh/common-ui/components";
import { type Message, Messages } from "@/entities/messages";

type Props = {
  messages: Message[];
  refWatchBottom?: Ref<HTMLDivElement>;
};

export const MessageListItem = ({ messages, refWatchBottom }: Props) => {
  return (
    <>
      {messages.map((message: Message) => (
        <Messages key={message.id} message={message} />
      ))}
      <Box ref={refWatchBottom} style={{ height: 1 }}></Box>
    </>
  );
};
