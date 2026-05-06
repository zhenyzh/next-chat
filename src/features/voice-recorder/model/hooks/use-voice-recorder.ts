import { useRef } from "react";
import { useVoiceRecorderActions, useVoiceRecorderStore } from "../store";
import { useWave } from "./use-wave";

export function useVoiceRecorder() {
  const {
    setAudioUrl,
    setStatus,
    incrementRecorderTime,
    resetPlaybackTime,
    resetRecorderTime,
    reset,
  } = useVoiceRecorderActions();

  const { analyserRef, startWave, stopWave } = useWave();

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const rafRef = useRef<number | null>(null);
  const recordIntervalRef = useRef<number | null>(null);

  const startRecordTimer = () => {
    if (recordIntervalRef.current) return;
    recordIntervalRef.current = window.setInterval(() => {
      incrementRecorderTime();
    }, 1000);
  };

  const stopRecordTimer = () => {
    if (recordIntervalRef.current) {
      clearInterval(recordIntervalRef.current);
      recordIntervalRef.current = null;
    }
  };

  const startRecorder = async () => {
    setStatus("recording");
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    streamRef.current = stream;
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    chunksRef.current = [];
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunksRef.current.push(e.data);
      }
    };
    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      audioUrlRef.current = url;
      setAudioUrl(url);
      setStatus("ready");
    };
    startWave(stream);
    recorder.start();
    resetRecorderTime();
    startRecordTimer();
  };

  const buildPreviewUrl = () => {
    const blob = new Blob(chunksRef.current, { type: "audio/webm" });
    return URL.createObjectURL(blob);
  };

  const pauseRecorder = () => {
    mediaRecorderRef.current?.pause();
    stopRecordTimer();
    const url = buildPreviewUrl();
    audioUrlRef.current = url;
    setAudioUrl(url);
    stopWave();
    setStatus("paused_recording");
  };

  const resumeRecorder = () => {
    const recorder = mediaRecorderRef.current;
    recorder?.resume();
    startRecordTimer();
    setStatus("recording");
  };

  const syncPlaybackTime = () => {
    if (!audioRef.current) return;
    const tick = () => {
      if (!audioRef.current) return;
      const current = Math.floor(audioRef.current.currentTime);
      useVoiceRecorderStore.setState({
        playbackTime: current,
      });
      if (!audioRef.current.paused) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    tick();
  };

  const playAudio = () => {
    const url = audioUrlRef.current;
    if (!url) return;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(url);

    audio.onended = () => {
      setStatus("ready");
    };

    audioRef.current = audio;

    setStatus("playing");
    audio.play().catch((e) => {
      console.error("Audio play failed:", e);
    });

    syncPlaybackTime();
  };

  const stopAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    stopWave();
    setStatus("paused");
  };

  const cancel = () => {
    mediaRecorderRef.current?.stop();
    streamRef.current?.getTracks().forEach((t) => t.stop());
    analyserRef.current?.ctx.close();
    mediaRecorderRef.current = null;
    audioRef.current = null;
    audioUrlRef.current = null;
    streamRef.current = null;
    analyserRef.current = null;
    chunksRef.current = [];
    stopRecordTimer();

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    reset();
  };

  return {
    startRecorder,
    playAudio,
    stopAudio,
    pauseRecorder,
    resumeRecorder,
    cancel,
  };
}
