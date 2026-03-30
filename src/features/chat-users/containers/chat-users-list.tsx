"use client";

import { useState } from "react";
import clsx from "clsx";
import { Box } from "@zhenyzh/common-ui/components";
import { ChatUserItem } from "../ui/chat-user-item";
import { useUsersChat } from "../model/hooks";
import { useOpenChat } from "@/entities/chat/model/hooks";
import { List, ScrollBar, UserPreviewSkeleton } from "@/shared/ui";
import s from "./chat-users-list.module.scss";

export function ChatUsersList() {
  // const item: ChatUsers[] = [
  //   {
  //     id: "1",
  //     name: "Иванов Иван",
  //     avatarUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-oM39OqBCgUncMTs88Hk7fWuEPiihQaxmw&s",
  //     createdAt: "Fri Jan 12 1992 16:02:57",
  //     lastMessage: "Привет сосед",
  //     isRead: true,
  //     countMessage: 100,
  //   },
  // ];

  const { userChatList, isLoading } = useUsersChat();
  const { handleChatOpen } = useOpenChat();
  const [activeUserId, setActiveUserId] = useState<number | null>(null);

  return (
    <ScrollBar>
      <List
        data={userChatList}
        getKey={(key) => key.id}
        isLoading={isLoading}
        skeleton={<UserPreviewSkeleton />}
        className={s.container}
        listClassName={(user) =>
          clsx(s.list, user.id === activeUserId && s.active)
        }
        renderItem={(user) => (
          <Box
            onClick={() => {
              handleChatOpen(user.id);
              setActiveUserId(user.id);
            }}
          >
            <ChatUserItem user={user} />
          </Box>
        )}
      />
    </ScrollBar>
  );
}
