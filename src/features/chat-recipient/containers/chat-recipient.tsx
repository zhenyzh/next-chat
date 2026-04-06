import { Box, Typography } from "@zhenyzh/common-ui/components";
import { useChatRecipient } from "../model/hooks";
import { useHasUserStatus } from "@/features/users-status/model/hooks";
import {
  UserPreview,
  UserPreviewSkeleton,
  AvatarPreviewOnlineWrapper,
} from "@/shared/ui";
import s from "./chat-recipient.module.scss";

export function ChatRecipient() {
  const { recipientId, recipientData, isLoading } = useChatRecipient();
  const isOnline = useHasUserStatus(recipientId);

  if (isLoading || !recipientData) {
    return (
      <Box>
        <UserPreviewSkeleton className={s.skeletonContainer} />
      </Box>
    );
  }

  return (
    <AvatarPreviewOnlineWrapper>
      <UserPreview
        name={recipientData.name}
        avatarUrl={recipientData.avatarUrl}
        isOnline={isOnline}
        subInfoSlot={
          <Typography className={s.subInfo} variant="label">
            {isOnline ? "Online" : "Offline"}
          </Typography>
        }
      />
    </AvatarPreviewOnlineWrapper>
  );
}
