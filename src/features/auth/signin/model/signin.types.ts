import { z } from "zod";
import { signInSchema } from "./signin.shema";

export type SignInFormValues = z.infer<typeof signInSchema>;
