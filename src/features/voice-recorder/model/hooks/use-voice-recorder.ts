import { useRef } from "react";
import {
  useStatusVoiceRecorder,
  useVoiceRecorderActions,
  useVoiceRecorderStore,
} from "../store";
import { useWave } from "./use-wave";

export function useVoiceRecorder() {
  const status = useStatusVoiceRecorder();

  const {
    setAudioUrl,
    setStatus,
    incrementPlaybackTime,
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
  const playIntervalRef = useRef<number | null>(null);

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

  const startPlayTimer = () => {
    if (playIntervalRef.current) return;
    playIntervalRef.current = window.setInterval(() => {
      incrementPlaybackTime();
    }, 1000);
  };

  const stopPlayTimer = () => {
    if (playIntervalRef.current) {
      clearInterval(playIntervalRef.current);
      playIntervalRef.current = null;
    }
  };

  const startRecorder = async () => {
    setStatus("recording");
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    streamRef.current = stream;
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    chunksRef.current = [];
    recorder.ondataavailable = (e) => chunksRef.current.push(e.data);
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

  const stopRecorder = () => {
    mediaRecorderRef.current?.stop();
    stopWave();
    stopRecordTimer(); // 👈
    setStatus("paused");
  };

  const resumeRecorder = () => {
    const recorder = mediaRecorderRef.current;
    recorder?.resume();
    startRecordTimer(); // 👈
    setStatus("recording");
  };

  const playAudio = () => {
    const url = audioUrlRef.current;
    if (!url) return;
    if (!audioRef.current) {
      const audio = new Audio(url);
      audio.onended = () => {
        stopPlayTimer(); // 👈
        setStatus("ready");
      };
      audioRef.current = audio;
    }

    stopPlayTimer();
    resetPlaybackTime();

    startPlayTimer();

    audioRef.current.play();
    setStatus("playing");
  };

  const stopAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    stopWave();
    setStatus("ready");
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
    stopRecordTimer(); // 👈
    stopPlayTimer(); // 👈

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
    stopRecorder,
    resumeRecorder,
    cancel,
  };
}
