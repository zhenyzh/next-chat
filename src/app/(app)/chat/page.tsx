"use client";

import { Box, Container } from "@zhenyzh/common-ui/components";
import { MessageList } from "@/widgets/message-list";
import { SendMessage } from "@/features/send-message";
import { ChatUserList } from "../../../features/chat-user-list";

import s from "./page.module.scss";

export default function ChatPage() {
  return (
    <Container className={s.container}>
      <Box className={s.userCard}>
        <ChatUserList />
      </Box>
      <Box className={s.headerUser}>
        <Box className={s.contentHeader}>хедер контент</Box>
      </Box>
      <Box className={s.contentMessage}>
        <MessageList />
      </Box>
      <Box className={s.contentInput}>
        <SendMessage />
      </Box>
    </Container>
  );
}
