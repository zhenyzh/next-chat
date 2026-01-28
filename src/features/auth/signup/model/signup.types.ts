import { z } from "zod";
import { signUpSchema } from "./signup.shema";

export type SignUpFormValues = z.infer<typeof signUpSchema>;
