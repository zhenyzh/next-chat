import { jsonApiInstance } from "@/shared/api";

export const logoutApi = {
  baseKey: "logout",
  logout: () => {
    return jsonApiInstance("/auth/logout", { method: "POST" });
  },
};
