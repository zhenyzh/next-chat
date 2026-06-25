"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Box, Button, Typography } from "@zhenyzh/common-ui/components";
import {
  UserPenIcon,
  LockKeyholeIcon,
  MailIcon,
} from "@zhenyzh/common-ui/icons";
import { useRegistration } from "../model/hooks";
import { paths } from "@/shared/configs";
import { FormTextField } from "@/shared/form";
import s from "../../auth.module.scss";

export function Registration() {
  const form = useRegistration();
  const router = useRouter();

  return (
    <Box as="form" className={s.container} onSubmit={form.submit}>
      <Typography variant="h2" className={s.text}>
        Регистрация
      </Typography>
      <Box className={s.inputContainer}>
        <FormTextField
          control={form.control}
          label="Введите почту"
          name="email"
          iconStart={<MailIcon />}
        />
        <FormTextField
          control={form.control}
          label="Введите имя"
          name="name"
          iconStart={<UserPenIcon />}
        />
        <FormTextField
          control={form.control}
          label="Введите пароль"
          name="password"
          type="password"
          iconStart={<LockKeyholeIcon />}
        />
        <FormTextField
          control={form.control}
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
        onClick={() => router.push(paths.login())}
        disabled={form.isPending}
      >
        Авторизоваться
      </Button>
    </Box>
  );
}
