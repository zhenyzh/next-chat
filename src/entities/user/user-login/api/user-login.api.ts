import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "@/shared/api";
import type { User } from "@/entities/user/user-login/model/types";

export const userLoginApi = {
  baseKey: "userLogin",
  getUserLoginQueryOptions: () => {
    return queryOptions({
      queryKey: [userLoginApi.baseKey],
      queryFn: (meta) =>
        jsonApiInstance<User>("users/me", { signal: meta.signal }),
    });
  },
};
