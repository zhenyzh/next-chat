import { Box } from "@zhenyzh/common-ui/components";
import { FileAttachList } from "../ui/file-attach-list";
import { MessageSendField } from "../ui/message-send-field";
import { useMessageFieldAutoHeight } from "@/features/message-field-height/model/hooks";
import { VoiceRecorder } from "@/features/voice-recorder/containers";

export function MessageInput() {
  const { heightResizeRef } = useMessageFieldAutoHeight();

  return (
    <Box ref={heightResizeRef}>
      <VoiceRecorder />
      <FileAttachList />
      <MessageSendField />
    </Box>
  );
}
