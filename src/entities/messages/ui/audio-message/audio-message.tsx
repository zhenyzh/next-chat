import { Box, Button } from "@zhenyzh/common-ui/components";
import { CirclePlayIcon, CirclePauseIcon } from "@zhenyzh/common-ui/icons";
import { useAudio } from "../../model/hooks";
import type { FileAttach } from "../../model/types";
import { DateTime } from "@/shared/ui";
import { formatTimeSeconds } from "@/shared/utils";
import s from "./audio-message.module.scss";

export function AudioMessage({ audio: { url } }: { audio: FileAttach }) {
  const { containerRef, isPlay, time, onPlayPause } = useAudio(url);

  return (
    <Box className={s.container}>
      <Button onClick={onPlayPause} className={s.button}>
        {isPlay ? (
          <CirclePauseIcon className={s.icon} width={28} height={28} />
        ) : (
          <CirclePlayIcon className={s.icon} width={28} height={28} />
        )}
      </Button>
      <DateTime className={s.time} value={formatTimeSeconds(time)} />
      <Box className={s.waveContainer}>
        <Box ref={containerRef} className={s.wave}></Box>
      </Box>
    </Box>
  );
}
