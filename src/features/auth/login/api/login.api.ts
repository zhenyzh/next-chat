import type { LoginDto } from "./login.dto";
import { jsonApiInstance } from "@/shared/api";

export const loginApi = {
  baseKey: "login",
  login: ({ email, password }: { email: string; password: string }) => {
    return jsonApiInstance<LoginDto>("/auth/login", {
      method: "POST",
      data: { email, password },
    });
  },
};
