"use client";

import { useRouter } from "next/navigation";
import { FormProvider } from "react-hook-form";
import clsx from "clsx";
import { Box, Button, Typography } from "@zhenyzh/common-ui/components";
import {
  UserPenIcon,
  LockKeyholeIcon,
  MailIcon,
} from "@zhenyzh/common-ui/icons";
import { useRegistration } from "../model/hooks";
import { Paths } from "@/shared/configs";
import { FormTextField } from "@/shared/form";
import s from "../../auth.module.scss";

export function Registration() {
  const registration = useRegistration();
  const router = useRouter();

  return (
    <FormProvider {...registration.form}>
      <Box as="form" className={s.container} onSubmit={registration.submit}>
        <Typography variant="h2" className={s.text}>
          Регистрация
        </Typography>
        <Box className={s.inputContainer}>
          <FormTextField
            label="Введите почту"
            name="email"
            iconStart={<MailIcon />}
          />
          <FormTextField
            label="Введите имя"
            name="name"
            iconStart={<UserPenIcon />}
          />
          <FormTextField
            label="Введите пароль"
            name="password"
            type="password"
            iconStart={<LockKeyholeIcon />}
          />
          <FormTextField
            label="Введите новый пароль"
            name="confirmPassword"
            type="password"
            iconStart={<LockKeyholeIcon />}
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
          onClick={() => router.push(Paths.login())}
          disabled={registration.isPending}
        >
          Авторизоваться
        </Button>
      </Box>
    </FormProvider>
  );
}
