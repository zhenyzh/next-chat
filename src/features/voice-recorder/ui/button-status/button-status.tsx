import { Button } from "@zhenyzh/common-ui/components";
import {
  CirclePlayIcon,
  CircleStopIcon,
  CirclePauseIcon,
  MicIcon,
} from "@zhenyzh/common-ui/icons";
import { useAudioStatus } from "../../model/hooks";
import s from "./button-status.module.scss";

type Props = {
  playAudio: () => void;
  stopAudio: () => void;
  stopRecorder: () => void;
  resumeRecorder: () => void;
};

export function ButtonStatus({
  playAudio,
  stopAudio,
  stopRecorder,
  resumeRecorder,
}: Props) {
  const { isRecording, isPlaying, isPaused, isReady } = useAudioStatus();

  return (
    <Button className={s.button}>
      {isRecording && (
        <CircleStopIcon className={s.stopIcon} onClick={stopRecorder} />
      )}

      {(isPaused || isPlaying || isReady) && (
        <>
          <MicIcon className={s.micIcon} onClick={resumeRecorder} />
          {isPlaying ? (
            <CirclePauseIcon className={s.pauseIcon} onClick={stopAudio} />
          ) : (
            <CirclePlayIcon className={s.playIcon} onClick={playAudio} />
          )}
        </>
      )}
    </Button>
  );
}
