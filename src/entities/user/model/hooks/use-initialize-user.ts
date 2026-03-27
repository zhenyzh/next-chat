import { useEffect } from "react";
import { useGetUserQuery } from "./use-get-user-query";
import { useUserActions } from "../store";

export function useInitializeUser() {
  const { user, isLoading } = useGetUserQuery();
  const { setUser } = useUserActions();

  useEffect(() => {
    if (user) setUser(user);
  }, [user, setUser]);

  return isLoading;
}
