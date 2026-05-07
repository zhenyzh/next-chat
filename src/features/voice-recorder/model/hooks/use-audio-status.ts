import { useStatusVoiceRecorder } from "../store";

export function useAudioStatus() {
  const status = useStatusVoiceRecorder();

  return {
    isRecording: status === "recording",
    isPausedRecording: status === "paused_recording",
    isPlaying: status === "playing",
    isPaused: status === "paused",
    isReady: status === "ready",
  };
}
