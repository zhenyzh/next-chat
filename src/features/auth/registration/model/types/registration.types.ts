import { z } from "zod";
import { registrationSchema } from "../shemas";

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
