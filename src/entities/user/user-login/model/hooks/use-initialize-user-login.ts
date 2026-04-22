import { useEffect } from "react";
import { useCurrentUserLogin } from "./use-current-user-login";
import { useUserLoginActions } from "../store";

export function useInitializeUserLogin() {
  const { user, isLoading } = useCurrentUserLogin();
  const { setUser } = useUserLoginActions();

  useEffect(() => {
    if (user) setUser(user);
  }, [user, setUser]);

  return isLoading;
}
