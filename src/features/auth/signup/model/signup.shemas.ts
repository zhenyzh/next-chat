import { z } from "zod";
import { ERROR_MESSAGES } from "@/shared/utils";

export const signUpSchema = z
  .object({
    email: z
      .string()
      .nonempty(ERROR_MESSAGES.REQUIRED)
      .email(ERROR_MESSAGES.EMAIL_INVALID),
    name: z
      .string()
      .nonempty(ERROR_MESSAGES.REQUIRED)
      .min(2, ERROR_MESSAGES.NAME_MIN),
    password: z
      .string()
      .nonempty(ERROR_MESSAGES.REQUIRED)
      .min(6, ERROR_MESSAGES.PASSWORD_MIN),
    confirmPassword: z
      .string()
      .nonempty(ERROR_MESSAGES.REQUIRED)
      .min(6, ERROR_MESSAGES.PASSWORD_MIN),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: ERROR_MESSAGES.PASSWORDS_MISMATCH,
    path: ["confirmPassword"],
  });
