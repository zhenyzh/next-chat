import type { SendMessageStore } from "./send-message.types";

export const textSelector = (state: SendMessageStore) => state.text;

export const messageActionsSelector = (state: SendMessageStore) =>
  state.actions;

export const allMessageSelector = (state: SendMessageStore) => ({
  text: state.text,
});
