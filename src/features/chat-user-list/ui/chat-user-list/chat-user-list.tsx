"use client";

import React from "react";

import { Box } from "@zhenyzh/common-ui/components";
import { ChatUserItem } from "../chat-user-item";
import type { ChatUser } from "@/features/chat-user-list/model/types";
import { List, ScrollBar, UserPreviewSkeleton } from "@/shared/ui";

import s from "./chat-user-list.module.scss";
import { useChatUserQuery } from "@/features/chat-user-list/model/hooks";

export function ChatUserList() {
  const item: ChatUser[] = [
    {
      id: "1",
      name: "Иванов Иван",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-oM39OqBCgUncMTs88Hk7fWuEPiihQaxmw&s",
      createdAt: "Fri Jan 12 1992 16:02:57",
      lastMessage: "Привет сосед",
      isRead: true,
      isOnline: true,
      countMessage: 100,
    },
  ];

  const data = useChatUserQuery();
  console.log({ data });

  const handleShowChat = (id: string) => {
    console.log("id", id);
  };

  return (
    <ScrollBar>
      <List
        data={item}
        getKey={(key) => key.id}
        skeleton={<UserPreviewSkeleton />}
        className={s.container}
        listClassName={s.userList}
        renderItem={(user) => (
          <Box onClick={() => handleShowChat(user.id)}>
            <ChatUserItem user={user} />
          </Box>
        )}
      />
    </ScrollBar>
  );
}
