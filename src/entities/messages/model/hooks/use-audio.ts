import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

export function useAudio(audio: string) {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveSurferRef = useRef<WaveSurfer>(null);

  const [isPlay, setIsPlay] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    waveSurferRef.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#fff",
      progressColor: "#1F2936",
      cursorWidth: 0,
      barWidth: 4,
      barRadius: 2,
      height: 48,
    });

    waveSurferRef.current.load(audio);

    waveSurferRef.current.on("play", () => setIsPlay(true));
    waveSurferRef.current.on("pause", () => setIsPlay(false));
    waveSurferRef.current.on("finish", () => setIsPlay(false));
    waveSurferRef.current.on("timeupdate", (seconds) =>
      setTime(Math.floor(seconds)),
    );
    return () => {
      waveSurferRef.current?.destroy();
    };
  }, [audio]);

  return {
    containerRef,
    isPlay,
    time,
    onPlayPause: () => waveSurferRef.current?.playPause(),
  };
}
