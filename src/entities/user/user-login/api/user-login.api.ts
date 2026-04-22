import { queryOptions } from "@tanstack/react-query";
import type { UserLogin } from "../model/types";
import { jsonApiInstance } from "@/shared/api";

export const userLoginApi = {
  baseKey: "userLogin",
  getUserLoginQueryOptions: () => {
    return queryOptions({
      queryKey: [userLoginApi.baseKey],
      queryFn: (meta) =>
        jsonApiInstance<UserLogin>("users/me", { signal: meta.signal }),
    });
  },
};
