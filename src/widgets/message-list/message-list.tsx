import React from "react";

import { Box } from "@zhenyzh/common-ui/components";

import { Messages } from "@/entities/messages";
import { ScrollBar } from "@/shared/components";
import { formatDateDistanceToNow } from "@/shared/utils";

import LogoP from "@/shared/assets/images/download.jpg";
import s from "./message-list.module.scss";

export function MessageList() {
  return (
    <Box className={s.container}>
      <ScrollBar>
        {Array.from({ length: 20 }, (_, i) => (
          <React.Fragment key={i}>
            <Messages
              message={{
                id: "1",
                fromMe: false,
                user: {
                  id: "u1",
                  fullName: "Иван Иванов",
                  avatarUrl: LogoP.src,
                  email: "ivan@example.com",
                },
                content: { text: "Привет! Как дела?" },
                createdAt: formatDateDistanceToNow("Fri Jan 23 2026 16:02:57"),
              }}
            />
            <Messages
              message={{
                id: "1",
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
              }}
            />
          </React.Fragment>
        ))}
      </ScrollBar>
    </Box>
  );
}
