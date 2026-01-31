"use client";

import { Box, Container } from "@zhenyzh/common-ui/components";
import { UserCardList } from "@/widgets/messenger/user-card-list/user-card-list";
import s from "./messenger.module.scss";

export function Messenger() {
  return (
    <Container className={s.container}>
      <Box className={s.userCard}>
        <UserCardList />
      </Box>
      <Box className={s.headerUser}>
        <Box className={s.contentHeader}>информация о пользователе</Box>
      </Box>
      <Box className={s.contentMessage}>сообщения</Box>
    </Container>
  );
}
