"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import clsx from "clsx";
import { UserPen, LockKeyhole, Mail } from "lucide-react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@zhenyzh/common-ui/components";
import { Paths } from "@/shared/configs";
import s from "../auth.module.scss";

export function SignUp() {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  const transitionSignIn = () => redirect(Paths.signin());

  return (
    <Box className={s.container}>
      <Typography variant="h2" className={s.text}>
        Регистрация
      </Typography>
      <Box className={s.inputContainer}>
        <TextField
          label="Введите почту"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          icon={<Mail />}
        />
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
        <TextField
          label="Введите новый пароль"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<LockKeyhole />}
        />
      </Box>
      <Button fullWidth>Зарегистрироваться</Button>
      <Button
        fullWidth
        variant="outline"
        className={clsx(s.text, s.link)}
        onClick={transitionSignIn}
      >
        Авторизоваться
      </Button>
    </Box>
  );
}
