import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

export function useAudio(audioUrl: string) {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveSurferRef = useRef<WaveSurfer>(null);

  const [time, setTime] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#fff",
      progressColor: "#1F2936",
      cursorWidth: 0,
      barWidth: 4,
      barRadius: 2,
      height: 48,
    });
    waveSurferRef.current = waveSurfer;
    waveSurfer.load(audioUrl);

    waveSurfer.on("play", () => setIsPlay(true));
    waveSurfer.on("pause", () => setIsPlay(false));
    waveSurfer.on("finish", () => setIsPlay(false));
    waveSurfer.on("timeupdate", (seconds) => setTime(Math.floor(seconds)));

    return () => {
      waveSurfer.destroy();
    };
  }, [audioUrl]);

  return {
    containerRef,
    isPlay,
    time,
    onPlayPause: () => waveSurferRef.current?.playPause(),
  };
}
