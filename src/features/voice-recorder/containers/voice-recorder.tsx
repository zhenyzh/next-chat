import { useEffect } from "react";
import { Box, Button } from "@zhenyzh/common-ui/components";
import { CloseIcon, SendHorizontalIcon } from "@zhenyzh/common-ui/icons";
import { ButtonStatus } from "../ui/button-status";
import { WaveRecorder } from "../ui/wave-recorder";
import { Time } from "../ui/time";
import { useVoiceRecorder } from "../model/hooks";
import s from "./voice-recorder.module.scss";

export function VoiceRecorder() {
  const {
    startRecorder,
    playAudio,
    stopAudio,
    pauseRecorder,
    resumeRecorder,
    cancel,
  } = useVoiceRecorder();

  useEffect(() => {
    startRecorder();
  }, []);

  return (
    <Box className={s.container}>
      <Box className={s.content}>
        <Button variant="outline" className={s.button} onClick={cancel}>
          <CloseIcon className={s.closeIcon} />
        </Button>

        <Box className={s.contentRecord}>
          <ButtonStatus
            playAudio={playAudio}
            stopAudio={stopAudio}
            pauseRecorder={pauseRecorder}
            resumeRecorder={resumeRecorder}
          />
          <WaveRecorder />
          <Time />
        </Box>

        <Button variant="outline" className={s.button}>
          <SendHorizontalIcon className={s.sendHorizontalIcon} />
        </Button>
      </Box>
    </Box>
  );
}
