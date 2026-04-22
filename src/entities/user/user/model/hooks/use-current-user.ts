import { useQuery } from "@tanstack/react-query";
import { userApi } from "../../api";

export function useCurrentUser() {
  const query = useQuery({
    ...userApi.getUserQueryOptions(),
  });

  return {
    user: query.data,
    isLoading: query.isLoading,
  };
}
