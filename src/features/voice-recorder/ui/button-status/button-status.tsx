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
  pauseAudio: () => void;
  pauseRecorder: () => void;
  resumeRecorder: () => void;
};

export function ButtonStatus({
  playAudio,
  pauseAudio,
  pauseRecorder,
  resumeRecorder,
}: Props) {
  const { isRecording, isPlaying, isPausedRecording, isPaused, isReady } =
    useAudioStatus();

  const showAudioContent =
    isPausedRecording || isPaused || isReady || isPlaying;

  return (
    <Button className={s.button}>
      {isRecording && (
        <CircleStopIcon className={s.stopIcon} onClick={pauseRecorder} />
      )}
      {showAudioContent && (
        <>
          <MicIcon className={s.micIcon} onClick={resumeRecorder} />
          {isPlaying ? (
            <CirclePauseIcon className={s.pauseIcon} onClick={pauseAudio} />
          ) : (
            <CirclePlayIcon className={s.playIcon} onClick={playAudio} />
          )}
        </>
      )}
    </Button>
  );
}
