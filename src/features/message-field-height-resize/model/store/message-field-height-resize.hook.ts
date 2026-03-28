import { useMessageFieldHeightResizeStore } from "./message-field-height-resize.store";
import {
  messageFieldHeightResizeSelector,
  messageFieldHeightResizeActionsSelector,
} from "./message-field-height-resize.selectors";
import { MessageFieldHeightResizeStore } from "./message-field-height-resize.types";

export const useMessageFieldHeightResize =
  (): MessageFieldHeightResizeStore["height"] =>
    useMessageFieldHeightResizeStore(messageFieldHeightResizeSelector);

export const useMessageFieldHeightResizeActions =
  (): MessageFieldHeightResizeStore["actions"] =>
    useMessageFieldHeightResizeStore(messageFieldHeightResizeActionsSelector);
