"use client";

import { Box } from "@zhenyzh/common-ui/components";

import { ChatSubContent } from "../chat-sub-content";
import { ChatUserSkeleton } from "../chat-user-skeleton";
import { UserCardPreviews } from "@/entities/user";
import { ContentList, DateTime, ScrollBar } from "@/shared/ui";
import { formatSmartDate } from "@/shared/utils";

import s from "./chat-user-list.module.scss";

export function ChatUserList() {
  const data = [
    {
      id: "1",
      name: "Иванов Иван",
      createdAt: "Fri Jan 12 1992 16:02:57",
      message: "Привет сосед",
      isRead: true,
    },
  ];

  return (
    <Box className={s.container}>
      <ScrollBar>
        <ContentList
          data={data}
          skeleton={<ChatUserSkeleton />}
          isLoading={true}
          renderItem={(item) => (
            <Box key={item.id} className={s.userCard}>
              <UserCardPreviews
                name={item.name}
                rightInfoSlot={
                  <DateTime value={formatSmartDate(item.createdAt)} />
                }
                subInfoSlot={
                  <ChatSubContent message={item.message} isRead={item.isRead} />
                }
              />
            </Box>
          )}
        />
      </ScrollBar>
    </Box>
  );
}
