"use client";

import { Box, Container } from "@zhenyzh/common-ui/components";
import { UserCardList } from "@/widgets/user-card-list";
import { UserCard } from "@/features/user-card";
import { MessageList } from "@/widgets/message-list";
import s from "./page.module.scss";

export default function ChatPage() {
  return (
    <Container className={s.container}>
      <Box className={s.userCard}>
        <UserCardList />
      </Box>
      <Box className={s.headerUser}>
        <Box className={s.contentHeader}>
          <UserCard name={"fddffd"} />
        </Box>
      </Box>
      <Box className={s.contentMessage}>
        <MessageList />
      </Box>
    </Container>
  );
}
