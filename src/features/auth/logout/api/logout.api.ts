import { apiInstance } from "@/shared/api";

export const logoutApi = {
  baseKey: "logout",
  logout: () => {
    return apiInstance("/auth/logout", { method: "POST" });
  },
};
