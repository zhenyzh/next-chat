import type { LoginDto } from "./login.dto";
import { apiInstance } from "@/shared/api";

export const loginApi = {
  baseKey: "login",
  login: ({ email, password }: { email: string; password: string }) => {
    return apiInstance<LoginDto>("/auth/login", {
      method: "POST",
      data: { email, password },
    });
  },
};
