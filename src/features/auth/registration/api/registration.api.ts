import { apiInstance } from "@/shared/api";

export const registrationApi = {
  baseKey: "registration",
  registration: ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    return apiInstance("/auth/registration", {
      method: "POST",
      data: { name, email, password },
    });
  },
};
