"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SignUpFormValues, signUpSchema } from "@/features/auth/signup";

export function useFormValidation() {
  return useForm<SignUpFormValues>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });
}
