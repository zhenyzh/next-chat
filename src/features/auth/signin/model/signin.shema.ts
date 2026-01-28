import { z } from "zod";

export const signinSchema = z.object({
  name: z.string().nonempty("Поле обязательное"),
  password: z.string().nonempty("Поле обязательное"),
});
