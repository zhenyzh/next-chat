import { Box } from "@zhenyzh/common-ui/components";
import s from "./wave-recorder.module.scss";

type Props = {
  bars: number[];
};

export function WaveRecorder({ bars }: Props) {
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
