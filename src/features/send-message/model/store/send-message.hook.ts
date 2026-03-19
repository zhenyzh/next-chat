import { useShallow } from "zustand/react/shallow";
import { useSendMessageStore } from "./send-message.store";
import {
  messageActionsSelector,
  allMessageSelector,
  messageSelector,
} from "./send-message.selectors";
import type { SendMessageStore } from "./send-message.types";

export const useMessage = (): SendMessageStore["message"] =>
  useSendMessageStore(messageSelector);

export const useMessageActions = (): SendMessageStore["actions"] =>
  useSendMessageStore(messageActionsSelector);

export const useAllMessages = (): {
  message: SendMessageStore["message"];
} => useSendMessageStore(useShallow(allMessageSelector));
