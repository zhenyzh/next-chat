import { Box } from "@zhenyzh/common-ui/components";
import { FileAttachList } from "../ui/file-attach-list";
import { MessageField } from "../ui/message-field";
import { useMessageFieldAutoHeight } from "@/features/message-field-height/model/hooks";

export function MessageInput() {
  const { heightResizeRef } = useMessageFieldAutoHeight();

  return (
    <Box ref={heightResizeRef}>
      <FileAttachList />
      <MessageField />
    </Box>
  );
}
