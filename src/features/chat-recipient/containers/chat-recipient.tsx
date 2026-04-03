import { Typography } from "@zhenyzh/common-ui/components";
import { useChatRecipient } from "../model/hooks";
import { useHasUserStatus } from "@/features/users-status/model/hooks";
import {
  UserPreview,
  UserPreviewSkeleton,
  AvatarPreviewOnlineWrapper,
} from "@/shared/ui";
import s from "./chat-recipient.module.scss";

export function ChatRecipient() {
  const { recipient, isLoading } = useChatRecipient();
  const isOnline = useHasUserStatus(4);

  if (isLoading || !recipient) {
    return <UserPreviewSkeleton />;
  }

  return (
    <AvatarPreviewOnlineWrapper>
      <UserPreview
        name={recipient.name}
        avatarUrl={recipient.avatarUrl}
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
