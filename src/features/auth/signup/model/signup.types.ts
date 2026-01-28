import { z } from "zod";
import { signUpSchema } from "./signup.shemas";

export type SignUpFormValues = z.infer<typeof signUpSchema>;
