import { useStatusVoiceRecorder } from "../store";

export function useButtonStatus() {
  const status = useStatusVoiceRecorder();

  return {
    isRecording: status === "recording",
    isPaused: status === "paused",
    isPlaying: status === "playing",
    isReady: status === "ready",
  };
}
