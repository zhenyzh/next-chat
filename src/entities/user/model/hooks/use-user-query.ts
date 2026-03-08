import { useQuery } from "@tanstack/react-query";
import { userApi } from "@/entities/user/api";

export function useUserQuery() {
  const query = useQuery({
    ...userApi.getUserQueryOptions(),
  });

  return {
    user: query.data!,
    isLoading: query.isLoading,
  };
}
