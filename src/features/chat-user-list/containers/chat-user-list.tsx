"use client";

import { Box } from "@zhenyzh/common-ui/components";
import { ChatUserItem } from "../ui/chat-user-item";
import { useGetChatUserQuery } from "@/features/chat-user-list/model/hooks";
import { useChatsOpenMutation } from "@/entities/chats/model/hooks";
import { List, ScrollBar, UserPreviewSkeleton } from "@/shared/ui";
import s from "./chat-user-list.module.scss";

export function ChatUserList() {
  // const item: ChatUser[] = [
  //   {
  //     id: "1",
  //     name: "Иванов Иван",
  //     avatarUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-oM39OqBCgUncMTs88Hk7fWuEPiihQaxmw&s",
  //     createdAt: "Fri Jan 12 1992 16:02:57",
  //     lastMessage: "Привет сосед",
  //     isRead: true,
  //     isOnline: true,
  //     countMessage: 100,
  //   },
  // ];

  const { userChatList, isLoading } = useGetChatUserQuery();
  const { handleChatOpen } = useChatsOpenMutation();

  return (
    <ScrollBar>
      <List
        data={userChatList}
        getKey={(key) => key.id}
        isLoading={isLoading}
        skeleton={<UserPreviewSkeleton />}
        className={s.container}
        listClassName={s.list}
        renderItem={(user) => (
          <Box onClick={() => handleChatOpen(user.id)}>
            <ChatUserItem user={user} />
          </Box>
        )}
      />
    </ScrollBar>
  );
}
