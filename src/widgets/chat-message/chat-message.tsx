import React from "react";

import { Messages } from "@/entities/messages";
import { List, ScrollBar } from "@/shared/ui";
import { formatDateDistanceToNow } from "@/shared/utils";

import LogoP from "@/shared/assets/images/download.jpg";
import s from "./chat-message.module.scss";

export function ChatMessage() {
  const data = Array.from({ length: 20 }).flatMap((_, i) => {
    return [
      {
        chatId: "1",
        fromMe: false,
        user: {
          id: "u1",
          fullName: "Иван Иванов",
          avatarUrl: LogoP.src,
          email: "ivan@example.com",
        },
        content: { text: "Привет! Как дела?" },
        createdAt: formatDateDistanceToNow("Fri Jan 23 2026 16:02:57"),
      },
      {
        chatId: "1",
        fromMe: true,
        user: {
          id: "u1",
          fullName: "Иван Иванов",
          avatarUrl: LogoP.src,
          email: "ivan@example.com",
        },
        content: {
          text: "Привет! Как дела?",
          imageUrl: [
            "https://koldunov.com/wp-content/uploads/2021/03/06.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLKy7pYSCRNDVje9qdb4M-JL579JbjutY1w&s",
          ],
        },
        createdAt: formatDateDistanceToNow("Fri Jan 23 2026 16:02:57"),
      },
    ];
  });

  return (
    <ScrollBar>
      <List
        data={data}
        className={s.container}
        renderItem={(message) => <Messages message={message} />}
      />
    </ScrollBar>
  );
}
