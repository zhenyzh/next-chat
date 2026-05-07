import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import RecordPlugin from "wavesurfer.js/plugins/record";
import { useVoiceRecorderActions, useVoiceRecorderStore } from "../store";

export function useVoiceRecorder() {
  const { setAudioUrl, setStatus, reset } = useVoiceRecorderActions();

  const containerRef = useRef<HTMLDivElement>(null);
  const waveSurferRef = useRef<WaveSurfer>(null);
  const recordRef = useRef<RecordPlugin>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#fff",
      progressColor: "#fff",
      height: 20,
      barWidth: 3,
      barGap: 2,
      barRadius: 999,
      cursorWidth: 0,
      normalize: true,
    });
    const record = waveSurfer.registerPlugin(
      RecordPlugin.create({
        scrollingWaveform: true,
        continuousWaveform: true,
        continuousWaveformDuration: 18,
      }),
    );
    record.on("record-end", (blob: Blob) => {
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      setStatus("ready");
    });
    waveSurfer.on("finish", () => {
      setStatus("ready");
    });
    waveSurferRef.current = waveSurfer;
    recordRef.current = record;
    return () => {
      waveSurfer.destroy();
    };
  }, [setAudioUrl, setStatus]);

  const startRecording = async () => {
    await recordRef.current?.startRecording();
    setStatus("recording");
  };

  const pauseRecording = () => {
    recordRef.current?.pauseRecording();
    setStatus("paused_recording");
  };

  const resumeRecording = () => {
    waveSurferRef.current?.setOptions({
      progressColor: "#fff",
    });
    recordRef.current?.resumeRecording();
    setStatus("recording");
  };

  const playAudio = async () => {
    const ws = waveSurferRef.current;
    if (useVoiceRecorderStore.getState().status === "paused_recording") {
      ws?.seekTo(0);
    }
    ws?.setOptions({
      progressColor: "#df7a7a",
    });
    await ws?.play();
    setStatus("playing");
  };

  const pauseAudio = async () => {
    waveSurferRef.current?.pause();
    setStatus("paused");
  };

  const cancel = () => {
    recordRef.current?.stopRecording();
    waveSurferRef.current?.destroy();
    recordRef.current = null;
    waveSurferRef.current = null;
    reset();
  };

  return {
    containerRef,
    startRecording,
    pauseRecording,
    resumeRecording,
    playAudio,
    pauseAudio,
    cancel,
  };
}
