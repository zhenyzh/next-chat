import { useUsersStatusStore } from "./users-status.store";
import {
  usersStatusSelector,
  usersStatusActionsSelector,
} from "./users-status.selectors";
import type { UsersStatusStore } from "./users-status.types";

export const useUsersStatus = (): UsersStatusStore["usersStatus"] =>
  useUsersStatusStore(usersStatusSelector);

export const useUsersStatusActions = (): UsersStatusStore["actions"] =>
  useUsersStatusStore(usersStatusActionsSelector);
