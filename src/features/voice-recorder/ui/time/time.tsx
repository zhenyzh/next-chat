import { Typography } from "@zhenyzh/common-ui/components";
import {
  useRecorderTimeVoiceRecorder,
  usePlaybackTimeVoiceRecorder,
} from "../../model/store";
import { useAudioStatus } from "../../model/hooks";
import { formatTime_Min_Colon_Sec } from "@/shared/utils";
import s from "./time.module.scss";

export function Time() {
  const { isPausedRecording, isRecording } = useAudioStatus();
  const recorderTime = useRecorderTimeVoiceRecorder();
  const playbackTime = usePlaybackTimeVoiceRecorder();

  const time = isPausedRecording || isRecording ? recorderTime : playbackTime;

  return (
    <Typography variant="label" className={s.label}>
      {formatTime_Min_Colon_Sec(time)}
    </Typography>
  );
}
