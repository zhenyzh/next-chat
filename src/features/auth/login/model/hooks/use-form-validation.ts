"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginFormValues } from "@/features/auth/login/model/types/login.types";
import { loginSchema } from "@/features/auth/login/model/shemas/login.shemas";

export function useFormValidation() {
  return useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });
}
