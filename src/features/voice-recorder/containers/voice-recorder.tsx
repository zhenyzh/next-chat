import { useEffect } from "react";
import { Box, Button } from "@zhenyzh/common-ui/components";
import { CloseIcon, SendHorizontalIcon } from "@zhenyzh/common-ui/icons";
import { ButtonStatus } from "../ui/button-status";
import { WaveRecorder } from "../ui/wave-recorder";
import { Time } from "../ui/time";
import { useSendVoiceRecorder, useVoiceRecorder } from "../model/hooks";
import s from "./voice-recorder.module.scss";

export function VoiceRecorder() {
  const vrSend = useSendVoiceRecorder();
  const vr = useVoiceRecorder();

  const onSend = async () => {
    const blob = await vr.endRecording();
    vrSend.onSendVoiceRecord(blob);
    vr.cancel();
  };

  useEffect(() => {
    void vr.startRecording();
  }, []);

  return (
    <Box className={s.container}>
      <Box className={s.content}>
        <Button variant="outline" className={s.button} onClick={vr.cancel}>
          <CloseIcon className={s.closeIcon} />
        </Button>
        <Box className={s.contentRecord}>
          <ButtonStatus
            playAudio={vr.playAudio}
            pauseAudio={vr.pauseAudio}
            pauseRecorder={vr.pauseRecording}
            resumeRecorder={vr.resumeRecording}
          />
          <WaveRecorder waveRef={vr.containerRef} />
          <Time />
        </Box>
        <Button
          variant="outline"
          className={s.button}
          onClick={onSend}
          disabled={vrSend.isPending}
        >
          <SendHorizontalIcon className={s.sendHorizontalIcon} />
        </Button>
      </Box>
    </Box>
  );
}
