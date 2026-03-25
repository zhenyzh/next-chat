import { useUsersStatusStore } from "./user-status.store";
import {
  usersStatusSelector,
  usersStatusActionsSelector,
} from "./user-status.selectors";
import type { UserStatusStore } from "./user-status.types";

export const useUsersStatus = (): UserStatusStore["usersStatus"] =>
  useUsersStatusStore(usersStatusSelector);

export const useUsersStatusActions = (): UserStatusStore["actions"] =>
  useUsersStatusStore(usersStatusActionsSelector);
