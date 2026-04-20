import { Button } from "@zhenyzh/common-ui/components";
import { MicIcon } from "@zhenyzh/common-ui/icons";

import s from "./microphone.module.scss";

export function Microphone() {
  return (
    <Button className={s.container} variant="outline">
      <MicIcon />
    </Button>
  );
}
