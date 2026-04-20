"use client";

import { Box, Container } from "@zhenyzh/common-ui/components";
import { ChatUsersList } from "@/widgets/chat-users/containers";
import { ChatRecipient } from "@/widgets/chat-recipient/containers";
import { ChatMessagesList } from "@/widgets/chat-messages/containers";
import { MessageInput } from "@/widgets/message-input/conteiners";
import { SearchChatUsers } from "@/features/search-chat-users/containers";
import { useSearchQueryParams } from "@/shared/hooks";
import s from "./page.module.scss";

export default function ChatPage() {
  const {
    query: { recipientId },
  } = useSearchQueryParams();

  return (
    <Container className={s.container}>
      <Box className={s.userCard}>
        <ChatUsersList />
      </Box>
      <Box className={s.userSearch}>
        <SearchChatUsers />
      </Box>
      {!!recipientId && (
        <Box className={s.userHead}>
          <ChatRecipient />
        </Box>
      )}
      <Box className={s.contentMessage}>
        <ChatMessagesList />
      </Box>
      <Box className={s.contentInput}>
        <MessageInput />
      </Box>
    </Container>
  );
}
