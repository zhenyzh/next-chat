import type { MessageFieldHeightResizeStore } from "./message-field-height-resize.types";

export const messageFieldHeightResizeSelector = (
  state: MessageFieldHeightResizeStore,
) => state.height;

export const messageFieldHeightResizeActionsSelector = (
  state: MessageFieldHeightResizeStore,
) => state.actions;
