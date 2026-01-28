import { z } from "zod";
import { signInSchema } from "./signin.shemas";

export type SignInFormValues = z.infer<typeof signInSchema>;
