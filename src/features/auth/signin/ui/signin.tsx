"use client";

import { redirect } from "next/navigation";
import clsx from "clsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { UserPen, LockKeyhole } from "lucide-react";

import { Box, Button, Typography } from "@zhenyzh/common-ui/components";

import { type SigninFormValues, signinSchema } from "@/features/auth/signin";
import { FormTextField } from "@/shared/components";
import { Paths } from "@/shared/configs";
import s from "../../auth.module.scss";

export function SignIn() {
  const transitionHome = () => redirect(Paths.home());
  const transitionSignUp = () => redirect(Paths.signup());

  const form = useForm<SigninFormValues>({
    defaultValues: {
      name: "",
      password: "",
    },
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = (data: SigninFormValues) => {
    console.log("dataSignIp", data);
    transitionHome();
  };

  return (
    <FormProvider {...form}>
      <Box
        as="form"
        className={s.container}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Typography variant="h2" className={s.text}>
          Авторизация
        </Typography>
        <Box className={s.inputContainer}>
          <FormTextField name="name" label="Введите имя" icon={<UserPen />} />
          <FormTextField
            name="password"
            type="password"
            label="Введите пароль"
            icon={<LockKeyhole />}
          />
        </Box>
        <Button fullWidth type="submit">
          Войти в аккаунт
        </Button>
        <Button
          fullWidth
          variant="outline"
          className={clsx(s.text, s.link)}
          onClick={transitionSignUp}
        >
          Зарегистрироваться
        </Button>
      </Box>
    </FormProvider>
  );
}
