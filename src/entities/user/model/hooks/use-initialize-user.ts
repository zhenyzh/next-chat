import { useEffect } from "react";
import { useCurrentUser } from "./use-current-user";
import { useUserActions } from "../store";

export function useInitializeUser() {
  const { user, isLoading } = useCurrentUser();
  const { setUser } = useUserActions();

  useEffect(() => {
    if (user) setUser(user);
  }, [user, setUser]);

  return isLoading;
}
