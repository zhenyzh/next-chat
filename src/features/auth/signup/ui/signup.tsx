"use client";

import { redirect } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { UserPen, LockKeyhole, Mail } from "lucide-react";

import { Box, Button, Typography } from "@zhenyzh/common-ui/components";

import { type SignUpFormValues, signUpSchema } from "@/features/auth/signup";
import { Paths } from "@/shared/configs";
import { FormTextField } from "@/shared/components";

import s from "../../auth.module.scss";

export function SignUp() {
  const transitionSignIn = () => redirect(Paths.signin());

  const form = useForm<SignUpFormValues>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log("dataSignUp", data);
  };

  return (
    <FormProvider {...form}>
      <Box
        as="form"
        className={s.container}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Typography variant="h2" className={s.text}>
          Регистрация
        </Typography>
        <Box className={s.inputContainer}>
          <FormTextField label="Введите почту" name="email" icon={<Mail />} />
          <FormTextField label="Введите имя" name="name" icon={<UserPen />} />
          <FormTextField
            label="Введите пароль"
            name="password"
            type="password"
            icon={<LockKeyhole />}
          />
          <FormTextField
            label="Введите новый пароль"
            name="confirmPassword"
            type="password"
            icon={<LockKeyhole />}
          />
        </Box>
        <Button fullWidth type="submit">
          Зарегистрироваться
        </Button>

        <Button
          fullWidth
          variant="outline"
          type="button"
          className={clsx(s.text, s.link)}
          onClick={transitionSignIn}
        >
          Авторизоваться
        </Button>
      </Box>
    </FormProvider>
  );
}
