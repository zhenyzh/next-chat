import { z } from "zod";

export const signupSchema = z
  .object({
    email: z
      .string()
      .nonempty("Поле обязательное")
      .email("Введите корректную почту"),
    name: z.string().nonempty("Поле обязательное").min(2, "Минимум 2 символа"),
    password: z
      .string()
      .nonempty("Поле обязательное")
      .min(6, "Минимум 6 символов"),
    confirmPassword: z
      .string()
      .nonempty("Поле обязательное")
      .min(6, "Минимум 6 символов"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });
