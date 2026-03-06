import { z } from "zod";
import { registrationSchema } from "../shemas/registration.shemas";

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
