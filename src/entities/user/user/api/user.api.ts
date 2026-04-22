import { queryOptions } from "@tanstack/react-query";
import type { User } from "../model/types";
import { jsonApiInstance } from "@/shared/api";

export const userApi = {
  baseKey: "user",
  getUserQueryOptions: () => {
    return queryOptions({
      queryKey: [userApi.baseKey],
      queryFn: (meta) =>
        jsonApiInstance<User>("users/me", { signal: meta.signal }),
    });
  },
};
