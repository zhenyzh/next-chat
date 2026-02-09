"use client";

import { Box } from "@zhenyzh/common-ui/components";

import { ChatSubContent } from "../chat-sub-content";
import {
  ContentList,
  DateTime,
  ScrollBar,
  UserPreview,
  UserPreviewSkeleton,
} from "@/shared/ui";

import { formatSmartDate } from "@/shared/utils";

import s from "./chat-user-list.module.scss";

export function ChatUserList() {
  const data = [
    {
      id: "1",
      name: "Иванов Иван",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-oM39OqBCgUncMTs88Hk7fWuEPiihQaxmw&s",
      createdAt: "Fri Jan 12 1992 16:02:57",
      message: "Привет сосед",
      isRead: true,
      isOnline: true,
    },
    {
      id: "2",
      name: "Сидоров Стас",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82RaIA37VV_k1Fpx_2vMsP8MoeOPdC1G94Q&s",
      createdAt: "Fri Jan 12 2025 16:02:57",
      message: "Привет сосед",
      isRead: false,
      isOnline: true,
    },
    {
      id: "3",
      name: "Зайцев Стас",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7Ieuq5O_rQsXixe5tbZvpuyPDZfnD-l19w&s",
      createdAt: "Fri Jan 12 2026 16:02:57",
      message:
        "би-2 би-2 би-2 би-2 би-2 би-2 би-2 би-2 би-2 би-2 би-2 би-2 би-2 би-2 би-2 би-2 би-2 би-2",
      isRead: true,
      isOnline: false,
    },
    {
      id: "4",
      name: "Райкин Денис",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDVbposLLo-nw-IB2FnHdEBdNrnTLxgENdwA&s",
      createdAt: "Fri Jan 12 2026 16:02:57",
      message: "Все плохо, везде капут",
      isRead: true,
      isOnline: true,
    },
    {
      id: "5",
      name: "Сидоровецкий Станислав",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYRzBbu6C8GUoEpDxO5hZyfuOvZJziRQDRQ&s",
      createdAt: "Fri Jan 23 2026 16:02:57",
      message: "Все плохо, везде капут!!!!!!!!!!!!!11111111",
      isRead: true,
      isOnline: false,
    },
  ];

  return (
    <ScrollBar>
      <ContentList
        data={data}
        skeleton={<UserPreviewSkeleton />}
        containerClassName={s.container}
        renderItem={(item) => (
          <Box key={item.id} className={s.userCard}>
            <UserPreview
              name={item.name}
              avatarUrl={item.avatarUrl}
              isOnline={item.isOnline}
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
  );
}
