import { useRef } from "react";
import {
  useBarsCountVoiceRecorder,
  useVoiceRecorderActions,
  useVoiceRecorderStore,
} from "../store";
import type { AudioAnalyser } from "../types";

export function useWave() {
  const { setVolume, setBars } = useVoiceRecorderActions();
  const barsCount = useBarsCountVoiceRecorder();

  const waveformRafRef = useRef<number | null>(null);
  const analyserRef = useRef<AudioAnalyser | null>(null);

  const startWave = (stream: MediaStream) => {
    const ctx = new AudioContext();
    const source = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 1024;
    const data = new Uint8Array(analyser.frequencyBinCount);
    source.connect(analyser);
    analyserRef.current = { analyser, data, ctx };

    const draw = () => {
      const { status } = useVoiceRecorderStore.getState();
      if (status === "paused_recording") {
        stopWave();
        return;
      }

      analyser.getByteFrequencyData(data);
      const avg = data.reduce((a, b) => a + b, 0) / data.length;
      setVolume(avg);
      const step = Math.floor(data.length / barsCount);
      const newBars = Array.from({ length: barsCount }).map((_, i) => {
        const slice = data.slice(i * step, (i + 1) * step);
        return slice.reduce((a, b) => a + b, 0) / slice.length;
      });
      setBars(newBars);
      waveformRafRef.current = requestAnimationFrame(draw);
    };

    draw();
  };

  const stopWave = () => {
    if (waveformRafRef.current) {
      cancelAnimationFrame(waveformRafRef.current);
      waveformRafRef.current = null;
    }
    analyserRef.current?.ctx?.close?.();
    analyserRef.current = null;
    setBars(Array(barsCount).fill(0));
    setVolume(0);
  };

  return { analyserRef, startWave, stopWave };
}
