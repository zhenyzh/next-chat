import { useStatusVoiceRecorder } from "../store";

export function useAudioStatus() {
  const status = useStatusVoiceRecorder();
  console.log({ status });
  return {
    isRecording: status === "recording",
    isPaused: status === "paused",
    isPlaying: status === "playing",
    isReady: status === "ready",
  };
}
