import type { VoiceRecorderStatus } from "../types";

export type VoiceRecorderStore = VoiceRecorder & {
  actions: VoiceRecorderActions;
};

export type VoiceRecorder = {
  barsCount: number;
  audioUrl: string | null;
  time: number;
  volume: number;
  status: VoiceRecorderStatus;
  bars: number[];
  isRecorderOpen: boolean;
};

export type VoiceRecorderActions = {
  setAudioUrl: (url: string | null) => void;
  incrementTime: () => void;
  resetTime: () => void;
  setVolume: (volume: number) => void;
  setStatus: (status: VoiceRecorderStatus) => void;
  setBars: (bars: number[]) => void;
  reset: () => void;
  openRecorder: () => void;
  closeRecorder: () => void;
};
