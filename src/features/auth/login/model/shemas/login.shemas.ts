import { z } from "zod";
import { ERROR_MESSAGES } from "@/shared/validation";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty(ERROR_MESSAGES.REQUIRED)
    .email(ERROR_MESSAGES.EMAIL_INVALID),
  password: z.string().nonempty(ERROR_MESSAGES.REQUIRED),
});
