import { Box, Button, Card, Typography } from "@zhenyzh/common-ui/components";
import {
  CloseIcon,
  CircleStopIcon,
  CirclePlayIcon,
  MicIcon,
  SendHorizontalIcon,
} from "@zhenyzh/common-ui/icons";
import { WaveRecorder } from "../ui/wave-recorder";
import { useVoiceRecorder } from "../model/hooks";
import { formatTime_Min_Colon_Sec } from "@/shared/utils";
import s from "./voice-recorder.module.scss";
import { useEffect } from "react";

export function VoiceRecorder() {
  const { status, time, bars, start, pause, resume, cancel } =
    useVoiceRecorder();

  useEffect(() => {
    start();
  }, []);

  return (
    <Box className={s.container}>
      <Card className={s.content}>
        <Button variant="outline" className={s.button} onClick={cancel}>
          <CloseIcon className={s.closeIcon} />
        </Button>
        <Card className={s.contentRecord}>
          <Button className={s.button}>
            {status === "recording" ? (
              <CircleStopIcon className={s.stopIcon} onClick={pause} />
            ) : (
              status === "paused" && (
                <MicIcon className={s.micIcon} onClick={resume} />
              )
            )}
            {status === "paused" && ( // воспроизвести
              <CirclePlayIcon className={s.playIcon} />
            )}
          </Button>

          <WaveRecorder bars={bars} />

          <Typography variant="label" className={s.label}>
            {formatTime_Min_Colon_Sec(time)}
          </Typography>
        </Card>
        <Button variant="outline" className={s.button}>
          <SendHorizontalIcon className={s.sendHorizontalIcon} />
        </Button>
      </Card>
    </Box>
  );
}
