import { useEffect, useRef } from "react";
import type { AudioAnalyser } from "../types";
import {
  useAllVoiceRecorder,
  useVoiceRecorderActions,
  useVoiceRecorderStore,
} from "../store";

export function useVoiceRecorder() {
  const { audioUrl, status, time, volume, bars, barsCount } =
    useAllVoiceRecorder();

  const {
    setAudioUrl,
    setStatus,
    incrementTime,
    resetTime,
    setVolume,
    setBars,
    reset,
  } = useVoiceRecorderActions();

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  const analyserRef = useRef<AudioAnalyser | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (status !== "recording") return;

    const timer = setInterval(() => incrementTime(), 1000);
    return () => clearInterval(timer);
  }, [status, incrementTime]);

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
      setAudioUrl(url);
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
      const { status } = useVoiceRecorderStore.getState();

      if (status === "paused") {
        rafRef.current = requestAnimationFrame(tick);
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

      rafRef.current = requestAnimationFrame(tick);
    };

    tick();

    setStatus("recording");
    resetTime();
  };

  const play = () => {
    if (!audioUrl) return;
    const audio = new Audio(audioUrl);
    audio.play();
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
    streamRef.current?.getTracks().forEach((t) => t.stop());
    analyserRef.current?.ctx.close();

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    reset();
  };

  return {
    status,
    time,
    audioUrl,
    volume,
    bars,
    start,
    play,
    pause,
    resume,
    cancel,
  };
}
