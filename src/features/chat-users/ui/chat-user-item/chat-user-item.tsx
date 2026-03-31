import { ChatSubContent } from "../chat-sub-content";
import type { ChatUsers } from "../../model/types";
import { useHasUserStatus } from "@/features/users-status/model/hooks";
import { DateTime, UserPreview } from "@/shared/ui";
import { formatSmartDate } from "@/shared/utils";

export function ChatUserItem({ data }: { data: ChatUsers }) {
  const isOnline = useHasUserStatus(data.id);

  return (
    <UserPreview
      name={data.name}
      avatarUrl={data?.avatarUrl}
      isOnline={isOnline}
      rightInfoSlot={<DateTime value={formatSmartDate(data.createdAt)} />}
      subInfoSlot={
        <ChatSubContent
          message={data.lastMessage}
          status={data.status}
          countMessage={data.countUnreadMessage}
          typedI={data.typedI}
        />
      }
    />
  );
}
