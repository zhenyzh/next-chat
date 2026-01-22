"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import clsx from "clsx";
import { UserPen, LockKeyhole } from "lucide-react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@zhenyzh/common-ui/components";
import { Paths } from "../../../../shared/configs";
import s from "../auth.module.scss";

export function SignIn() {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  const transitionHome = () => redirect(Paths.home());
  const transitionSignUp = () => redirect(Paths.signup());

  return (
    <Box className={s.container}>
      <Typography variant="h2" className={s.text}>
        Авторизация
      </Typography>
      <Box className={s.inputContainer}>
        <TextField
          label="Введите имя"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          icon={<UserPen />}
        />
        <TextField
          label="Введите пароль"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<LockKeyhole />}
        />
      </Box>
      <Button fullWidth onClick={transitionHome}>
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
  );
}
