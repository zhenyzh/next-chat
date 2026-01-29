"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SignInFormValues, signInSchema } from "@/features/auth/signin";

export function useFormValidation() {
  return useForm<SignInFormValues>({
    defaultValues: {
      name: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
  });
}
