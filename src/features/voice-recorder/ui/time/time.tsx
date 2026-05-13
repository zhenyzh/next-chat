import {
  useRecorderTimeVoiceRecorder,
  usePlaybackTimeVoiceRecorder,
} from "../../model/store";
import { useAudioStatus } from "../../model/hooks";
import { formatTimeSeconds } from "@/shared/utils";
import { DateTime } from "@/shared/ui";
import s from "./time.module.scss";

export function Time() {
  const { isPlaying, isPaused } = useAudioStatus();
  const recorderTime = useRecorderTimeVoiceRecorder();
  const playbackTime = usePlaybackTimeVoiceRecorder();

  const time = isPlaying || isPaused ? playbackTime : recorderTime;

  return <DateTime value={formatTimeSeconds(time)} className={s.label} />;
}
