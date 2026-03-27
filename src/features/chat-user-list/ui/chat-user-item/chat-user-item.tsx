import { ChatSubContent } from "../chat-sub-content";
import type { ChatUser } from "../../model/types";
import { useHasUserStatus } from "@/features/users-status/model/hooks";
import { DateTime, UserPreview } from "@/shared/ui";
import { formatSmartDate } from "@/shared/utils";

export function ChatUserItem({ user }: { user: ChatUser }) {
  const isOnline = useHasUserStatus(user.id);

  return (
    <UserPreview
      name={user.name}
      avatarUrl={user.avatarUrl}
      isOnline={isOnline}
      // rightInfoSlot={<DateTime value={formatSmartDate(user.createdAt)} />}
      subInfoSlot={
        <ChatSubContent
          message={user.lastMessage}
          isRead={user.isRead}
          countMessage={user.countMessage}
        />
      }
    />
  );
}
