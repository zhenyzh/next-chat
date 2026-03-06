"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { RegistrationFormValues } from "../types/registration.types";
import { registrationSchema } from "../shemas/registration.shemas";

export function useFormValidation() {
  return useForm<RegistrationFormValues>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registrationSchema),
    mode: "onBlur",
  });
}
