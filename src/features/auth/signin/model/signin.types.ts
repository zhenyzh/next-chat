import { z } from "zod";
import { signinSchema } from "./signin.shema";

export type SigninFormValues = z.infer<typeof signinSchema>;
