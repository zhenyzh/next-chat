import { queryOptions } from "@tanstack/react-query";
import type { User } from "../model/types";
import { apiInstance } from "@/shared/api";

export const userApi = {
  baseKey: "user",
  getUserQueryOptions: () => {
    return queryOptions({
      queryKey: [userApi.baseKey],
      queryFn: (meta) => apiInstance<User>("users/me", { signal: meta.signal }),
    });
  },
};
