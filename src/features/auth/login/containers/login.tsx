"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";
import { FormProvider } from "react-hook-form";
import { Box, Button, Typography } from "@zhenyzh/common-ui/components";
import { MailIcon, LockKeyholeIcon } from "@zhenyzh/common-ui/icons";

import { useLogin } from "@/features/auth/login/model/hooks";
import { FormTextField } from "@/shared/form";
import { paths } from "@/shared/configs";
import s from "../../auth.module.scss";

export function Login() {
  const router = useRouter();
  const login = useLogin();

  return (
    <FormProvider {...login.form}>
      <Box as="form" className={s.container} onSubmit={login.submit}>
        <Typography variant="h2" className={s.text}>
          Авторизация
        </Typography>
        <Box className={s.inputContainer}>
          <FormTextField
            name="email"
            label="Введите почту"
            iconStart={<MailIcon />}
          />
          <FormTextField
            name="password"
            type="password"
            label="Введите пароль"
            iconStart={<LockKeyholeIcon />}
          />
        </Box>
        <Button fullWidth type="submit" disabled={login.isPending}>
          Войти в аккаунт
        </Button>
        <Button
          fullWidth
          variant="outline"
          type="button"
          className={clsx(s.text, s.link)}
          onClick={() => router.push(paths.registration())}
        >
          Зарегистрироваться
        </Button>
      </Box>
    </FormProvider>
  );
}
