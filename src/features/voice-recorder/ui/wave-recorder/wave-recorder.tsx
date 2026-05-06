import { Box } from "@zhenyzh/common-ui/components";
import { useBarsVoiceRecorder } from "../../model/store";
import s from "./wave-recorder.module.scss";

export function WaveRecorder() {
  const bars = useBarsVoiceRecorder();

  return (
    <Box className={s.container}>
      {bars.map((v, i) => (
        <Box
          key={i}
          className={s.bar}
          style={{
            height: Math.max(4, v / 2),
          }}
        />
      ))}
    </Box>
  );
}
