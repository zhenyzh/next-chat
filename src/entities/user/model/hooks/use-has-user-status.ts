import { useUsersStatus } from "../store/user-status";

export function useHasUserStatus(userId: number) {
  const usersStatus = useUsersStatus();
  return usersStatus.includes(userId);
}
