import { useShallow } from "zustand/react/shallow";
import { useFileAttachStore } from "./file-attach.store";
import {
  filesSelector,
  allFilesAttachSelector,
  filesAttachActionsSelector,
} from "./file-attach.selectors";
import type { FileAttachStore } from "./file-attach.types";

export const useFilesAttach = (): FileAttachStore["files"] =>
  useFileAttachStore(filesSelector);

export const useFilesAttachActions = (): FileAttachStore["actions"] =>
  useFileAttachStore(filesAttachActionsSelector);

export const useAllMessages = (): {
  files: FileAttachStore["files"];
} => useFileAttachStore(useShallow(allFilesAttachSelector));
