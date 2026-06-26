"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Box, Button, Typography } from "@zhenyzh/common-ui/components";
import { useRegistration } from "../model/hooks";
import { FormElementItem } from "../ui/form-element-item";
import { paths } from "@/shared/configs";
import s from "../../auth.module.scss";

export function Registration() {
  const router = useRouter();
  const form = useRegistration();

  return (
    <Box as="form" className={s.container} onSubmit={form.submit}>
      <Typography variant="h2" className={s.text}>
        Регистрация
      </Typography>
      <Box className={s.inputContainer}>
        <FormElementItem control={form.control} />
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
