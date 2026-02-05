import { SendHorizontal } from "lucide-react";

import s from "../containers/send-message.module.scss";

export function Sending() {
  return (
    <SendHorizontal
      onClick={() => alert("иконка send ")}
      className={s.pointer}
    />
  );
}
