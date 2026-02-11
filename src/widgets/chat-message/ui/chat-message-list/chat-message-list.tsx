import React from "react";

import { Messages } from "@/entities/messages";
import { List, ScrollBar } from "@/shared/ui";

import { SubDateContent } from "../sub-time-content";

import LogoP from "@/shared/assets/images/download.jpg";
import s from "./chat-message-list.module.scss";

export function ChatMessageList() {
  const data = [
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
      createdAt: "Fri Jan 11 2026 16:02:57",
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
      createdAt: "Fri Jan 11 2026 16:02:57",
    },
    {
      chatId: "1",
      fromMe: false,
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
      createdAt: "Fri Jan 12 2026 16:02:57",
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
      createdAt: "Fri Jan 13 2026 16:02:57",
    },
    {
      chatId: "1",
      fromMe: false,
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
      createdAt: "Fri Jan 14 2026 16:02:57",
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
      createdAt: "Fri Jan 15 2026 16:02:57",
    },
    {
      chatId: "1",
      fromMe: false,
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
      createdAt: "Fri Jan 16 2026 16:02:57",
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
      createdAt: "Fri Jan 17 2026 16:02:57",
    },
    {
      chatId: "1",
      fromMe: false,
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
      createdAt: "Fri Jan 18 2026 16:02:57",
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
      createdAt: "Fri Jan 19 2026 16:02:57",
    },
    {
      chatId: "1",
      fromMe: false,
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
      createdAt: "Fri Jan 20 2026 16:02:57",
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
      createdAt: "Fri Jan 25 2026 16:02:57",
    },
    {
      chatId: "1",
      fromMe: false,
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
      createdAt: "Fri Jan 24 2026 16:02:57",
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
      createdAt: "Fri Feb 10 2026 16:02:57",
    },
  ];

  return (
    <ScrollBar>
      <List
        data={data}
        getKey={(key) => key.chatId + key.user.id}
        className={s.container}
        renderItem={(message) => (
          <>
            <SubDateContent date={message.createdAt} />
            <Messages message={message} />
          </>
        )}
      />
    </ScrollBar>
  );
}
