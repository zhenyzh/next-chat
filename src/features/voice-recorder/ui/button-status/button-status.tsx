import { Button } from "@zhenyzh/common-ui/components";
import {
  CirclePlayIcon,
  CircleStopIcon,
  CirclePauseIcon,
  MicIcon,
} from "@zhenyzh/common-ui/icons";
import { useButtonStatus } from "../../model/hooks";
import s from "./button-status.module.scss";

type Props = {
  play: () => void;
  stopPlayback: () => void;
  pause: () => void;
  resume: () => void;
};

export function ButtonStatus({ play, stopPlayback, pause, resume }: Props) {
  const { isRecording, isPlaying, isPaused, isReady } = useButtonStatus();

  return (
    <Button className={s.button}>
      {isRecording && <CircleStopIcon className={s.stopIcon} onClick={pause} />}

      {(isPaused || isPlaying || isReady) && (
        <>
          <MicIcon className={s.micIcon} onClick={resume} />
          {isPlaying ? (
            <CirclePauseIcon className={s.pauseIcon} onClick={stopPlayback} />
          ) : (
            <CirclePlayIcon className={s.playIcon} onClick={play} />
          )}
        </>
      )}
    </Button>
  );
}
