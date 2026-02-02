"use client";

import { Box, Container } from "@zhenyzh/common-ui/components";
import { UserCardList } from "@/widgets/chat/user-card-list/user-card-list";
import s from "./messenger.module.scss";
import { MessangeList } from "@/widgets/chat/messange-list/messange-list";
import { UserCard } from "@/shared/components";

export function Chat() {
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
        <MessangeList />
      </Box>
    </Container>
  );
}
