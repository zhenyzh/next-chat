import { useEffect, useRef, useState } from "react";
import type { AudioAnalyser, VoiceRecorderStatus } from "../types";

const BARS_COUNT = 200;

export function useVoiceRecorder() {
  const [status, setStatus] = useState<VoiceRecorderStatus>("idle");
  const [time, setTime] = useState(0);
  const [audio, setAudio] = useState<string | null>(null);
  const [volume, setVolume] = useState(0);
  const [bars, setBars] = useState<number[]>(Array(BARS_COUNT).fill(4));

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  const analyserRef = useRef<AudioAnalyser | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (status !== "recording") return;

    const timer = setInterval(() => setTime((p) => p + 1), 1000);
    return () => clearInterval(timer);
  }, [status]);

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    streamRef.current = stream;

    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    chunksRef.current = [];

    recorder.ondataavailable = (e) => chunksRef.current.push(e.data);

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      setAudio(url);
      setStatus("preview");
    };

    recorder.start();

    const ctx = new AudioContext();
    const source = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();

    analyser.fftSize = 1024;

    const data = new Uint8Array(analyser.frequencyBinCount);

    source.connect(analyser);
    analyserRef.current = { analyser, data, ctx };

    const tick = () => {
      if (status === "paused") {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      analyser.getByteFrequencyData(data);

      const avg = data.reduce((a, b) => a + b, 0) / data.length;
      setVolume((v) => v * 0.8 + avg * 0.2);

      const step = Math.floor(data.length / BARS_COUNT);

      const newBars = Array.from({ length: BARS_COUNT }).map((_, i) => {
        const slice = data.slice(i * step, (i + 1) * step);
        const sliceAvg = slice.reduce((a, b) => a + b, 0) / slice.length;

        return sliceAvg;
      });

      setBars((prev) => newBars.map((v, i) => prev[i] * 0.7 + v * 0.3));

      rafRef.current = requestAnimationFrame(tick);
    };

    tick();

    setStatus("recording");
    setTime(0);
  };

  const pause = () => {
    mediaRecorderRef.current?.pause();
    setStatus("paused");
  };

  const resume = () => {
    mediaRecorderRef.current?.resume();
    setStatus("recording");
  };

  const cancel = () => {
    mediaRecorderRef.current?.stop();
    cleanup();

    setStatus("idle");
    setAudio(null);
    setTime(0);
    setBars(Array(BARS_COUNT).fill(4));
  };

  const cleanup = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    analyserRef.current?.ctx.close();

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  };

  return {
    status,
    time,
    audio,
    volume,
    bars,
    start,
    pause,
    resume,
    cancel,
  };
}
