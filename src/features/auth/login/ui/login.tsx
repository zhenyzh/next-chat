"use client";

import { redirect } from "next/navigation";
import clsx from "clsx";
import { FormProvider } from "react-hook-form";
import { Mail, LockKeyhole } from "lucide-react";

import { Box, Button, Typography } from "@zhenyzh/common-ui/components";

import { FormTextField } from "@/shared/form";
import { Paths } from "@/shared/configs";
import s from "../../auth.module.scss";
import {
  type LoginFormValues,
  useFormValidation,
} from "@/features/auth/login/model";

export function Login() {
  const form = useFormValidation();

  const transitionHome = () => redirect(Paths.home());
  const transition = () => redirect(Paths.registration());

  const onSubmit = (data: LoginFormValues) => {
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
          <FormTextField
            name="email"
            label="Введите почту"
            iconStart={<Mail />}
          />
          <FormTextField
            name="password"
            type="password"
            label="Введите пароль"
            iconStart={<LockKeyhole />}
          />
        </Box>
        <Button fullWidth type="submit">
          Войти в аккаунт
        </Button>
        <Button
          fullWidth
          variant="outline"
          type="button"
          className={clsx(s.text, s.link)}
          onClick={transition}
        >
          Зарегистрироваться
        </Button>
      </Box>
    </FormProvider>
  );
}
