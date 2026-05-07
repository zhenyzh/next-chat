import { useWave } from "../hooks";
import { useVoiceRecorderActions, useVoiceRecorderStore } from "../store";

export function useVoiceRecorder() {
  const { setStatus, reset } = useVoiceRecorderActions();
  const { containerRef, waveSurferRef, recordRef } = useWave();

  const startRecording = async () => {
    setStatus("recording");
    await recordRef.current?.startRecording();
  };

  const pauseRecording = () => {
    recordRef.current?.pauseRecording();
    setStatus("paused_recording");
  };

  const resumeRecording = () => {
    setStatus("recording");
    waveSurferRef.current?.setOptions({
      progressColor: "#fff",
    });
    recordRef.current?.resumeRecording();
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

  const pauseAudio = () => {
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
