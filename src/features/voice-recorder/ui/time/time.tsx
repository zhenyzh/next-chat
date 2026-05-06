import { Typography } from "@zhenyzh/common-ui/components";
import {
  useRecorderTimeVoiceRecorder,
  usePlaybackTimeVoiceRecorder,
} from "../../model/store";
import { useAudioStatus } from "../../model/hooks";
import { formatTime_Min_Colon_Sec } from "@/shared/utils";
import s from "./time.module.scss";

export function Time() {
  const { isPlaying, isReady } = useAudioStatus();
  const recorderTime = useRecorderTimeVoiceRecorder();
  const playbackTime = usePlaybackTimeVoiceRecorder();
  console.log({ recorderTime, playbackTime });
  const time = isPlaying || isReady ? playbackTime : recorderTime;

  return (
    <Typography variant="label" className={s.label}>
      {formatTime_Min_Colon_Sec(time)}
    </Typography>
  );
}
