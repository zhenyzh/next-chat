import { z } from "zod";
import { signupSchema } from "./signup.shema";

export type SignupFormValues = z.infer<typeof signupSchema>;
