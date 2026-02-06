"use client";

import { Box } from "@zhenyzh/common-ui/components";

import { SubContent } from "@/features/chat-user-card/ui/sub-content";
import { UserCardPreviews } from "@/entities/user";
import { DateTime, ScrollBar } from "@/shared/ui";
import { formatSmartDate } from "@/shared/utils";

import s from "./chat-user-list.module.scss";

export function ChatUserList() {
  return (
    <Box className={s.container}>
      <ScrollBar>
        {Array.from({ length: 20 }, (_, i) => (
          <Box key={i} className={s.userCard}>
            <UserCardPreviews
              key={i}
              name={"Иванов Иван"}
              rightInfoSlot={
                <DateTime value={formatSmartDate("Fri Jan 12 1992 16:02:57")} />
              }
              subInfoSlot={
                <SubContent message={"Привет аовтолавр"} isRead={true} />
              }
            />
          </Box>
        ))}
      </ScrollBar>
    </Box>
  );
}
