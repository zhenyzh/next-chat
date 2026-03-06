"use client";

import { redirect } from "next/navigation";
import { FormProvider } from "react-hook-form";
import clsx from "clsx";
import { UserPen, LockKeyhole, Mail } from "lucide-react";

import { Box, Button, Typography } from "@zhenyzh/common-ui/components";

import {
  type RegistrationFormValues,
  useFormValidation,
  useRegistration,
} from "@/features/auth/registration/model";
import { Paths } from "@/shared/configs";
import { FormTextField } from "@/shared/form";

import s from "../../auth.module.scss";

export function Registration() {
  const form = useFormValidation();
  const registration = useRegistration();

  const transition = () => redirect(Paths.login());

  const onSubmit = (data: RegistrationFormValues) => {
    registration.handleRegistration(data, { onSuccess: () => transition() });
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
          <FormTextField
            label="Введите почту"
            name="email"
            iconStart={<Mail />}
          />
          <FormTextField
            label="Введите имя"
            name="name"
            iconStart={<UserPen />}
          />
          <FormTextField
            label="Введите пароль"
            name="password"
            type="password"
            iconStart={<LockKeyhole />}
          />
          <FormTextField
            label="Введите новый пароль"
            name="confirmPassword"
            type="password"
            iconStart={<LockKeyhole />}
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
          onClick={transition}
        >
          Авторизоваться
        </Button>
      </Box>
    </FormProvider>
  );
}
