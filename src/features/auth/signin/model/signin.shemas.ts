import { z } from "zod";
import { ERROR_MESSAGES } from "@/shared/utils";

export const signInSchema = z.object({
  name: z.string().nonempty(ERROR_MESSAGES.REQUIRED),
  password: z.string().nonempty(ERROR_MESSAGES.REQUIRED),
});
