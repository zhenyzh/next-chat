"use client";

import { useState } from "react";
import clsx from "clsx";
import { UserPen, DoorClosed } from "lucide-react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@zhenyzh/common-ui/components";
import s from "./auth.module.scss";

export function Auth() {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  return (
    <Box className={s.container}>
      <Typography variant="h2" className={s.text}>
        Вход
      </Typography>
      <Box className={s.inputContainer}>
        <TextField
          label="Введите название комнаты"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          icon={<DoorClosed />}
        />
        <TextField
          label="Введите свое имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<UserPen />}
        />
      </Box>
      <Button fullWidth>Войти в аккаунт</Button>
      <Button fullWidth variant="outline" className={clsx(s.text, s.link)}>
        Зарегистрироваться
      </Button>
    </Box>
  );
}
