"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Box, Button, Typography } from "@zhenyzh/common-ui/components";
import { MailIcon, LockKeyholeIcon } from "@zhenyzh/common-ui/icons";
import { useLogin } from "@/features/auth/login/model/hooks";
import { FormTextField } from "@/shared/form";
import { paths } from "@/shared/configs";
import s from "../../auth.module.scss";

export function Login() {
  const form = useLogin();
  const router = useRouter();

  return (
    <Box as="form" className={s.container} onSubmit={form.submit}>
      <Typography variant="h2" className={s.text}>
        Авторизация
      </Typography>
      <Box className={s.inputContainer}>
        <FormTextField
          control={form.control}
          name="email"
          label="Введите почту"
          iconStart={<MailIcon />}
        />
        <FormTextField
          control={form.control}
          name="password"
          type="password"
          label="Введите пароль"
          iconStart={<LockKeyholeIcon />}
        />
      </Box>
      <Button fullWidth type="submit" disabled={form.isPending}>
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
  );
}
