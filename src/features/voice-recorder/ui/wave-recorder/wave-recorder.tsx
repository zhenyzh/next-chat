import { Box } from "@zhenyzh/common-ui/components";
import { type Ref } from "react";
import s from "./wave-recorder.module.scss";

type Props = {
  waveRef: Ref<HTMLDivElement>;
};

export function WaveRecorder({ waveRef }: Props) {
  return (
    <Box className={s.container}>
      <div ref={waveRef} className={s.waveform} />
    </Box>
  );
}
