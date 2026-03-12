import React from "react";

import { SubDateContent } from "../sub-time-content";
import { MessageListItem } from "../message-list-item";
import { List, ScrollBar } from "@/shared/ui";

import LogoP from "@/shared/assets/images/download.jpg";
import s from "./chat-message-list.module.scss";
import { useChatOpenMutation } from "@/features/chat-user-list/model/hooks";

export function ChatMessageList() {
  const data = [
    {
      data: "Fri Jan 11 2026 16:02:57",
      messages: [
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
        },
        {
          chatId: "1",
          fromMe: true,
          user: {
            id: "u2",
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
        },
      ],
    },
  ];

  const { chatId } = useChatOpenMutation();
  console.log({ chatId });
  return (
    <ScrollBar>
      <List
        data={data}
        getKey={(item) => item.data}
        className={s.container}
        renderItem={(group) => (
          <>
            <SubDateContent date={group.data} />
            <MessageListItem messages={group.messages} />
          </>
        )}
      />
    </ScrollBar>
  );
}
