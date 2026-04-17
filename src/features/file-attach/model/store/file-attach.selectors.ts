import type { FileAttachStore } from "./file-attach.types";

export const filesSelector = (state: FileAttachStore) => state.message;

export const fileAttachActionsSelector = (state: FileAttachStore) =>
  state.actions;

export const allFileAttachSelector = (state: FileAttachStore) => ({
  message: state.message,
});
