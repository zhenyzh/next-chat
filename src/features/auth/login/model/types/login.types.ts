import { z } from "zod";
import { loginSchema } from "../shemas/login.shemas";

export type LoginFormValues = z.infer<typeof loginSchema>;
