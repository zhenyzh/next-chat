import { StatusRecipient } from "../ui/status-recipient";
import { useChatUserRecipient } from "../model/hooks";
import { useHasUserStatus } from "@/features/users-status/model/hooks";
import {
  CardPreview,
  CardPreviewSkeleton,
  CardPreviewWrapper,
} from "@/shared/ui";
import { patchUrl } from "@/shared/configs";

export function ChatUserRecipient() {
  const { recipientId, recipientData, isLoading } = useChatUserRecipient();
  const isOnline = useHasUserStatus(recipientId);

  if (isLoading || !recipientData) {
    return <CardPreviewSkeleton style={{ padding: 0 }} />;
  }

  return (
    <CardPreviewWrapper>
      <CardPreview
        title={recipientData.name}
        url={patchUrl(recipientData.avatarUrl)}
        isOnline={isOnline}
        subInfoSlot={<StatusRecipient isOnline={isOnline} />}
      />
    </CardPreviewWrapper>
  );
}
