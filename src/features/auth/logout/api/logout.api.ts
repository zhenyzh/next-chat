import type { LogoutDto } from "./logout.dto";
import { apiInstance } from "@/shared/api";

export const logoutApi = {
  baseKey: "logout",
  logout: () => {
    return apiInstance<LogoutDto>("/auth/logout", { method: "POST" });
  },
};
