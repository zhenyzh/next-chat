import { Box } from "@zhenyzh/common-ui/components";
import { FileAttachList } from "../ui/file-attach-list";
import { MessageSendField } from "../ui/message-send-field";
import { useMessageFieldAutoHeight } from "@/features/message-field-height/model/hooks";
import { VoiceRecorder } from "@/features/voice-recorder/containers";
import { useIsOpenVoiceRecorder } from "@/features/voice-recorder/model/store";

export function MessageInput() {
  const { heightResizeRef } = useMessageFieldAutoHeight();
  const isOpen = useIsOpenVoiceRecorder();

  return (
    <Box ref={heightResizeRef}>
      <FileAttachList />
      {isOpen ? <VoiceRecorder /> : <MessageSendField />}
    </Box>
  );
}
