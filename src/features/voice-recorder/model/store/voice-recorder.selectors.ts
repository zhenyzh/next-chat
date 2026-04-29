import type { VoiceRecorderStore } from "./voice-recorder.types";

export const audioUrlSelector = (state: VoiceRecorderStore) => state.audioUrl;

export const statusSelector = (state: VoiceRecorderStore) => state.status;

export const timeSelector = (state: VoiceRecorderStore) => state.time;

export const volumeSelector = (state: VoiceRecorderStore) => state.volume;

export const barsSelector = (state: VoiceRecorderStore) => state.bars;

export const barsCountSelector = (state: VoiceRecorderStore) => state.barsCount;

export const isRecorderOpenSelector = (state: VoiceRecorderStore) =>
  state.isRecorderOpen;

export const voiceRecorderActionsSelector = (state: VoiceRecorderStore) =>
  state.actions;

export const allVoiceRecorderSelector = (state: VoiceRecorderStore) => ({
  audioUrl: state.audioUrl,
  status: state.status,
  time: state.time,
  volume: state.volume,
  bars: state.bars,
  barsCount: state.barsCount,
  isRecorderOpen: state.isRecorderOpen,
});
