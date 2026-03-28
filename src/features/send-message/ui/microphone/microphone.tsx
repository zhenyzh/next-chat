import { Mic } from "lucide-react";
import { Button } from "@zhenyzh/common-ui/components";
import s from "./microphone.module.scss";

export function Microphone() {
  return (
    <Button className={s.container} variant="outline">
      <Mic />
    </Button>
  );
}
