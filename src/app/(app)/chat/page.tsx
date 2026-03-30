"use client";

import { Box, Container } from "@zhenyzh/common-ui/components";
import { ChatMessagesList } from "@/widgets/chat-messages";
import { SendMessage } from "@/features/send-message";
import { ChatUsersList } from "@/features/chat-users";
import s from "./page.module.scss";

export default function ChatPage() {
  return (
    <Container className={s.container}>
      <Box className={s.userCard}>
        <ChatUsersList />
      </Box>
      <Box className={s.userHead}>
        <Box className={s.contentHeader}>хедер контент</Box>
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
