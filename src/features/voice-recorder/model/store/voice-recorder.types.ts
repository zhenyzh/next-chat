import type { VoiceRecorderStatus } from "../types";

export type VoiceRecorderStore = VoiceRecorder & {
  actions: VoiceRecorderActions;
};

export type VoiceRecorder = {
  audioUrl: string | null;
  status: VoiceRecorderStatus;
  isRecorderOpen: boolean;
  recorderTime: number;
  playbackTime: number;
};

export type VoiceRecorderActions = {
  setAudioUrl: (url: string | null) => void;
  setRecorderTime: (time: number) => void;
  setPlaybackTime: (time: number) => void;
  setStatus: (status: VoiceRecorderStatus) => void;
  openRecorder: () => void;
  closeRecorder: () => void;
  reset: () => void;
};
