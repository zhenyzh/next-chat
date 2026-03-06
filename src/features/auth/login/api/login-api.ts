import { jsonApiInstance } from "@/shared/api";

export const loginApi = {
  baseKey: "login",
  login: ({ email, password }: { email: string; password: string }) => {
    return jsonApiInstance("/auth/login", {
      method: "POST",
      json: { email, password },
    });
  },
};
