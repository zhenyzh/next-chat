import { Typography } from "@zhenyzh/common-ui/components";
import {
  useRecorderTimeVoiceRecorder,
  usePlaybackTimeVoiceRecorder,
} from "../../model/store";
import { useAudioStatus } from "../../model/hooks";
import { formatTimeSeconds } from "@/shared/utils";
import s from "./time.module.scss";

export function Time() {
  const { isPausedRecording, isRecording, isReady } = useAudioStatus();
  const recorderTime = useRecorderTimeVoiceRecorder();
  const playbackTime = usePlaybackTimeVoiceRecorder();

  const time =
    isPausedRecording || isRecording || isReady ? recorderTime : playbackTime;

  return (
    <Typography variant="label" className={s.label}>
      {formatTimeSeconds(time)}
    </Typography>
  );
}
