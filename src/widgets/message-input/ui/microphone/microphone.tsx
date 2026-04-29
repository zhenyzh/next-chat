import { Button } from "@zhenyzh/common-ui/components";
import { MicIcon } from "@zhenyzh/common-ui/icons";
import { useVoiceRecorderActions } from "@/features/voice-recorder/model/store";
import s from "./microphone.module.scss";

export function Microphone() {
  const { openRecorder } = useVoiceRecorderActions();

  return (
    <Button className={s.container} variant="outline" onClick={openRecorder}>
      <MicIcon />
    </Button>
  );
}
