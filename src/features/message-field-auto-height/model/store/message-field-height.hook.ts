import { useMessageFieldHeightStore } from "./message-field-height.store";
import {
  messageFieldHeightSelector,
  messageFieldHeightActionsSelector,
} from "./message-field-height.selectors";
import { MessageFieldHeightStore } from "./message-field-height.types";

export const useMessageFieldHeight = (): MessageFieldHeightStore["height"] =>
  useMessageFieldHeightStore(messageFieldHeightSelector);

export const useMessageFieldHeightActions =
  (): MessageFieldHeightStore["actions"] =>
    useMessageFieldHeightStore(messageFieldHeightActionsSelector);
