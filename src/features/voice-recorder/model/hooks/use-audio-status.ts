import { useStatusVoiceRecorder } from "../store";

export function useAudioStatus() {
  const status = useStatusVoiceRecorder();

  return {
    isRecording: status === "recording",
    isPaused: status === "paused",
    isPlaying: status === "playing",
    isReady: status === "ready",
    isPausedRecording: status === "paused_recording",
  };
}
