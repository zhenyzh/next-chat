import type { VoiceRecorderStatus } from "../types";

export type VoiceRecorderStore = VoiceRecorder & {
  actions: VoiceRecorderActions;
};

export type VoiceRecorder = {
  barsCount: number;
  audioUrl: string | null;
  volume: number;
  status: VoiceRecorderStatus;
  bars: number[];
  isRecorderOpen: boolean;
  recorderTime: number;
  playbackTime: number;
};

export type VoiceRecorderActions = {
  setAudioUrl: (url: string | null) => void;
  incrementRecorderTime: () => void;
  incrementPlaybackTime: () => void;
  resetRecorderTime: () => void;
  resetPlaybackTime: () => void;
  setVolume: (volume: number) => void;
  setStatus: (status: VoiceRecorderStatus) => void;
  setBars: (bars: number[]) => void;
  reset: () => void;
  openRecorder: () => void;
  closeRecorder: () => void;
};
