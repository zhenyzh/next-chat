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
    containerRef,
    startRecording,
    pauseRecording,
    resumeRecording,
    playAudio,
    pauseAudio,
    cancel,
  } = useVoiceRecorder();

  useEffect(() => {
    void startRecording();
  }, [startRecording]);

  return (
    <Box className={s.container}>
      <Box className={s.content}>
        <Button variant="outline" className={s.button} onClick={cancel}>
          <CloseIcon className={s.closeIcon} />
        </Button>
        <Box className={s.contentRecord}>
          <ButtonStatus
            playAudio={playAudio}
            pauseAudio={pauseAudio}
            pauseRecorder={pauseRecording}
            resumeRecorder={resumeRecording}
          />
          <WaveRecorder waveRef={containerRef} />
          <Time />
        </Box>
        <Button variant="outline" className={s.button}>
          <SendHorizontalIcon className={s.sendHorizontalIcon} />
        </Button>
      </Box>
    </Box>
  );
}
