import { useShallow } from "zustand/react/shallow";
import { useSendMessageStore } from "./send-message.store";
import {
  messageActionsSelector,
  allMessageSelector,
  textSelector,
} from "./send-message.selectors";
import type { SendMessageStore } from "./send-message.types";

export const useTextMessage = (): SendMessageStore["text"] =>
  useSendMessageStore(textSelector);

export const useMessageActions = (): SendMessageStore["actions"] =>
  useSendMessageStore(messageActionsSelector);

export const useAllMessages = (): {
  text: SendMessageStore["text"];
} => useSendMessageStore(useShallow(allMessageSelector));
