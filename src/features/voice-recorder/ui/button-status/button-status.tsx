import { Button } from "@zhenyzh/common-ui/components";
import {
  CirclePlayIcon,
  CircleStopIcon,
  MicIcon,
} from "@zhenyzh/common-ui/icons";
import { useStatusVoiceRecorder } from "../../model/store";
import s from "./button-status.module.scss";

type Props = {
  play: () => void;
  pause: () => void;
  resume: () => void;
};

export function ButtonStatus({ play, pause, resume }: Props) {
  const status = useStatusVoiceRecorder();

  return (
    <Button className={s.button}>
      {status === "recording" ? (
        <CircleStopIcon className={s.stopIcon} onClick={pause} />
      ) : (
        status === "paused" && (
          <>
            <MicIcon className={s.micIcon} onClick={resume} />
            <CirclePlayIcon className={s.playIcon} onClick={play} />
          </>
        )
      )}
    </Button>
  );
}
