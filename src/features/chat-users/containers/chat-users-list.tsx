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
  const { usersChat, isLoading } = useUsersChat();
  const { handleChatOpen } = useOpenChat();
  const [activeUserId, setActiveUserId] = useState<number | null>(null);

  return (
    <ScrollBar>
      <List
        data={usersChat}
        getKey={(key) => key.id}
        isLoading={isLoading}
        skeleton={<UserPreviewSkeleton />}
        className={s.container}
        listClassName={(item) =>
          clsx(s.list, item.id === activeUserId && s.active)
        }
        renderItem={(item) => (
          <Box
            onClick={() => {
              handleChatOpen(item.id);
              setActiveUserId(item.id);
            }}
          >
            <ChatUserItem data={item} />
          </Box>
        )}
      />
    </ScrollBar>
  );
}
