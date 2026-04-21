import { ChatSubContent } from "../chat-sub-content";
import type { ChatUsers } from "../../model/types";
import { useHasUserStatus } from "@/features/users-status/model/hooks";
import { CardPreviewWrapper, DateTime, CardPreview } from "@/shared/ui";
import { formatDateTimeAgo } from "@/shared/utils";

export function ChatUserItem({ data }: { data: ChatUsers }) {
  const isOnline = useHasUserStatus(data.id);

  return (
    <CardPreviewWrapper>
      <CardPreview
        name={data.name}
        avatarUrl={data?.avatarUrl}
        isOnline={isOnline}
        rightInfoSlot={<DateTime value={formatDateTimeAgo(data.createdAt)} />}
        subInfoSlot={
          <ChatSubContent
            message={data.lastMessage}
            status={data.status}
            countMessage={data.countUnreadMessage}
            typedI={data.typedI}
          />
        }
      />
    </CardPreviewWrapper>
  );
}
