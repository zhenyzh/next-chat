import { useUsersStatus } from "../store";

export function useHasUserStatus(userId: number) {
  const usersStatus = useUsersStatus();
  return usersStatus.includes(userId);
}
