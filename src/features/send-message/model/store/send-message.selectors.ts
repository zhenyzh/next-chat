import type { SendMessageStore } from "./send-message.types";

export const textSelector = (state: SendMessageStore) => state.message;

export const messageActionsSelector = (state: SendMessageStore) =>
  state.actions;

export const allMessageSelector = (state: SendMessageStore) => ({
  message: state.message,
});
