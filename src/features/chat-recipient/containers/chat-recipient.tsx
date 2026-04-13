import { Box } from "@zhenyzh/common-ui/components";
import { useChatRecipient } from "../model/hooks";
import { StatusRecipient } from "../ui/status-recipient";
import { useHasUserStatus } from "@/features/users-status/model/hooks";
import {
  UserPreview,
  UserPreviewSkeleton,
  AvatarPreviewOnlineWrapper,
} from "@/shared/ui";

export function ChatRecipient() {
  const { recipientId, recipientData, isLoading } = useChatRecipient();
  const isOnline = useHasUserStatus(recipientId);

  if (isLoading || !recipientData) {
    return (
      <Box>
        <UserPreviewSkeleton style={{ padding: 0 }} />
      </Box>
    );
  }

  return (
    <AvatarPreviewOnlineWrapper>
      <UserPreview
        name={recipientData.name}
        avatarUrl={recipientData.avatarUrl}
        isOnline={isOnline}
        subInfoSlot={<StatusRecipient isOnline={isOnline} />}
      />
    </AvatarPreviewOnlineWrapper>
  );
}
