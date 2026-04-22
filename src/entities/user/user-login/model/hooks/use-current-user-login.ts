import { useQuery } from "@tanstack/react-query";
import { userLoginApi } from "../../api";

export function useCurrentUserLogin() {
  const query = useQuery({
    ...userLoginApi.getUserLoginQueryOptions(),
  });

  return {
    user: query.data,
    isLoading: query.isLoading,
  };
}
