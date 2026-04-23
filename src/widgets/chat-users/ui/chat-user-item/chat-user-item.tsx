import { ChatSubContent } from "../chat-sub-content";
import { useHasUserStatus } from "@/features/users-status/model/hooks";
import type { ChatUsers } from "@/entities/chat-user/model/types";
import { CardPreviewWrapper, DateTime, CardPreview } from "@/shared/ui";
import { formatDateTimeAgo } from "@/shared/utils";
import { patchUrl } from "@/shared/configs";

export function ChatUserItem({ data }: { data: ChatUsers }) {
  const isOnline = useHasUserStatus(data.id);

  return (
    <CardPreviewWrapper>
      <CardPreview
        title={data.name}
        url={patchUrl(data?.avatarUrl)}
        isOnline={isOnline}
        rightInfoSlot={<DateTime value={formatDateTimeAgo(data.createdAt)} />}
        subInfoSlot={
          <ChatSubContent
            message={data.lastMessage}
            attachments={data.attachments}
            status={data.status}
            countMessage={data.countUnreadMessage}
            typedI={data.typedI}
          />
        }
      />
    </CardPreviewWrapper>
  );
}
