"use client";

import { TextField } from "@zhenyzh/common-ui/components";

import { Add } from "./ui/add";
import { EmojiSmile } from "./ui/emoji-smile";
import { Sending } from "./ui/sending";
import { Microphone } from "./ui/microphone";
import s from "./send-message.module.scss";
import { useState } from "react";

export function SendMessage() {
  const [message, setMessage] = useState("");

  return (
    <TextField
      onChange={(e) => setMessage(e.target.value)}
      placeholder={"Сообщение"}
      iconStart={<Add />}
      iconEnd={
        <>
          <EmojiSmile />
          {message.trim() ? <Sending /> : <Microphone />}
        </>
      }
    />
  );
}
