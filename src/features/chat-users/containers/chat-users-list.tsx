import clsx from "clsx";
import { Box } from "@zhenyzh/common-ui/components";
import { ChatUserItem } from "../ui/chat-user-item";
import { useChatUsersList } from "../model/hooks";
import { useOpenChat } from "@/entities/chat/model/hooks";
import { List, ScrollBar, UserPreviewSkeleton } from "@/shared/ui";
import { useSearchQueryParams } from "@/shared/hooks";
import { EmptyContent } from "@/shared/ui";
import s from "./chat-users-list.module.scss";

export function ChatUsersList() {
  const {
    setQuery,
    query: { recipientId, recipientsSearch },
  } = useSearchQueryParams();

  const { usersChat, isLoading } = useChatUsersList();
  const { handleChatOpen } = useOpenChat();

  return (
    <ScrollBar>
      <List
        data={usersChat}
        getKey={(key) => key.id}
        isLoading={isLoading}
        skeleton={<UserPreviewSkeleton />}
        className={s.container}
        listClassName={(item) =>
          clsx(s.list, item.id === +recipientId && s.active)
        }
        renderItem={(item) => (
          <Box
            onClick={() => {
              handleChatOpen(item.id);
              setQuery({ recipientId: item.id });
            }}
          >
            <ChatUserItem data={item} />
          </Box>
        )}
        empty={
          !usersChat.length &&
          !!recipientsSearch && <EmptyContent label="Нет такого пользователя" />
        }
      />
    </ScrollBar>
  );
}
