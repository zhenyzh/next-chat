import type { MessageFieldHeightStore } from "./message-field-height.types";

export const messageFieldHeightSelector = (state: MessageFieldHeightStore) =>
  state.height;

export const messageFieldHeightActionsSelector = (
  state: MessageFieldHeightStore,
) => state.actions;
