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
          <CirclePauseIcon className={s.icon} />
        ) : (
          <CirclePlayIcon className={s.icon} />
        )}
      </Button>
      <DateTime className={s.time} value={formatTimeSeconds(time)} />
      <Box ref={containerRef} className={s.wave}></Box>
    </Box>
  );
}
