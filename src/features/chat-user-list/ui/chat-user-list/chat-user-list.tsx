"use client";

import React from "react";

import { ChatSubContent } from "../chat-sub-content";
import {
  DateTime,
  List,
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
  ];

  return (
    <ScrollBar>
      <List
        data={data}
        skeleton={<UserPreviewSkeleton />}
        className={s.container}
        listClassName={s.userCard}
        renderItem={(item) => (
          <UserPreview
            name={item.name}
            avatarUrl={item.avatarUrl}
            isOnline={item.isOnline}
            rightInfoSlot={<DateTime value={formatSmartDate(item.createdAt)} />}
            subInfoSlot={
              <ChatSubContent message={item.message} isRead={item.isRead} />
            }
          />
        )}
      />
    </ScrollBar>
  );
}
