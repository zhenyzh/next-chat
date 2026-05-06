import { useRef } from "react";
import {
  useAllVoiceRecorder,
  useVoiceRecorderActions,
} from "@/features/voice-recorder/model/store";
import type { AudioAnalyser } from "@/features/voice-recorder/model/types";

export function useWave() {
  const { setVolume, setBars } = useVoiceRecorderActions();
  const { barsCount } = useAllVoiceRecorder();

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
  };

  return { analyserRef, startWave, stopWave };
}
