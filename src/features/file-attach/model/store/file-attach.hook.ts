import { useShallow } from "zustand/react/shallow";
import { useSendMessageStore } from "./file-attach.store";
import {
  messageActionsSelector,
  allMessageSelector,
  messageSelector,
} from "./file-attach.selectors";
import type { FileAttachStore } from "./file-attach.types";

export const useMessage = (): FileAttachStore["message"] =>
  useSendMessageStore(messageSelector);

export const useMessageActions = (): FileAttachStore["actions"] =>
  useSendMessageStore(messageActionsSelector);

export const useAllMessages = (): {
  message: FileAttachStore["message"];
} => useSendMessageStore(useShallow(allMessageSelector));
