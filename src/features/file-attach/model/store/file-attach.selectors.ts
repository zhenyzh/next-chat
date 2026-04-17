import type { FileAttachStore } from "./file-attach.types";

export const filesSelector = (state: FileAttachStore) => state.files;

export const filesAttachActionsSelector = (state: FileAttachStore) =>
  state.actions;

export const allFilesAttachSelector = (state: FileAttachStore) => ({
  files: state.files,
});
