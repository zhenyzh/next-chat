import { useEffect } from "react";
import { Box, Button, Typography } from "@zhenyzh/common-ui/components";
import { CloseIcon, SendHorizontalIcon } from "@zhenyzh/common-ui/icons";
import { ButtonStatus } from "../ui/button-status";
import { WaveRecorder } from "../ui/wave-recorder";
import { useVoiceRecorder } from "../model/hooks";
import { formatTime_Min_Colon_Sec } from "@/shared/utils";
import s from "./voice-recorder.module.scss";

export function VoiceRecorder() {
  const { time, start, play, stopPlayback, pause, resume, cancel } =
    useVoiceRecorder();

  useEffect(() => {
    start();
  }, []);

  return (
    <Box className={s.container}>
      <Box className={s.content}>
        <Button variant="outline" className={s.button} onClick={cancel}>
          <CloseIcon className={s.closeIcon} />
        </Button>

        <Box className={s.contentRecord}>
          <ButtonStatus
            play={play}
            stopPlayback={stopPlayback}
            pause={pause}
            resume={resume}
          />
          <WaveRecorder />
          <Typography variant="label" className={s.label}>
            {formatTime_Min_Colon_Sec(time)}
          </Typography>
        </Box>

        <Button variant="outline" className={s.button}>
          <SendHorizontalIcon className={s.sendHorizontalIcon} />
        </Button>
      </Box>
    </Box>
  );
}
