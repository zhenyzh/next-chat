"use client";

import { Box, Container } from "@zhenyzh/common-ui/components";
import { ChatMessagesList } from "@/widgets/chat-messages/containers";
import { SendMessage } from "@/features/send-message/containers";
import { ChatUsersList } from "@/features/chat-users/containers";
import { ChatRecipient } from "@/features/chat-recipient/containers";
import s from "./page.module.scss";

export default function ChatPage() {
  return (
    <Container className={s.container}>
      <Box className={s.userCard}>
        <ChatUsersList />
      </Box>
      <Box className={s.userHead}>
        <Box className={s.contentHeader}>
          <ChatRecipient />
        </Box>
      </Box>
      <Box className={s.contentMessage}>
        <ChatMessagesList />
      </Box>
      <Box className={s.contentInput}>
        <SendMessage />
      </Box>
    </Container>
  );
}
