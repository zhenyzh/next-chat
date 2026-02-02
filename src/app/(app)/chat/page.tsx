"use client";

import { Box, Container, TextField } from "@zhenyzh/common-ui/components";
import { UserCardList } from "@/widgets/user-card-list";
import { UserCard } from "@/features/user-card";
import { MessageList } from "@/widgets/message-list";
import { SendHorizontal, CirclePlus, Smile } from "lucide-react";
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
      <Box className={s.sendMessage}>
        <TextField
          placeholder={"Сообщение"}
          icon={
            <CirclePlus
              onClick={() => alert("иконка + ")}
              className={s.point}
            />
          }
          iconEnd={
            <>
              <Smile className={s.point} style={{ marginRight: "20px" }} />
              <SendHorizontal
                onClick={() => alert("иконка send ")}
                className={s.point}
              />
            </>
          }
        />
      </Box>
    </Container>
  );
}
