import { jsonApiInstance } from "@/shared/api";

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
    return jsonApiInstance("/auth/registration", {
      method: "POST",
      json: { name, email, password },
    });
  },
};
