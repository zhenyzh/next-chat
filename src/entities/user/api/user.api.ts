import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "@/shared/api";
import type { User } from "../model/types";

export const userApi = {
  baseKey: "user",
  getUserQueryOptions: () => {
    return queryOptions({
      queryKey: [userApi.baseKey, "list"],
      queryFn: (meta) =>
        jsonApiInstance<User>("users/me", { signal: meta.signal }),
    });
  },
};
