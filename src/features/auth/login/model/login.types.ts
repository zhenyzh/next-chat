import { z } from "zod";
import { loginSchema } from "./login.shemas";

export type LoginFormValues = z.infer<typeof loginSchema>;
