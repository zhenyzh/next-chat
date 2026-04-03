import { Box } from "@zhenyzh/common-ui/components";
import { ChatSubContent } from "../chat-sub-content";
import type { ChatUsers } from "../../model/types";
import { useHasUserStatus } from "@/features/users-status/model/hooks";
import { DateTime, UserPreview } from "@/shared/ui";
import { formatDateTimeAgo } from "@/shared/utils";

export function ChatUserItem({ data }: { data: ChatUsers }) {
  const isOnline = useHasUserStatus(data.id);

  return (
    <Box style={{ "--avatar-online-bg": "var(--color-bg-primary-v1)" }}>
      <UserPreview
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
    </Box>
  );
}
