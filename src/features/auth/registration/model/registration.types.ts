import { z } from "zod";
import { registrationSchema } from "./registration.shemas";

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
