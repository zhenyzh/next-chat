import { jsonApiInstance } from "@/shared/api";
import type { LoginDto } from "./login.dto";

export const loginApi = {
  baseKey: "login",
  login: ({ email, password }: { email: string; password: string }) => {
    return jsonApiInstance<LoginDto>("/auth/login", {
      method: "POST",
      json: { email, password },
    });
  },
};
