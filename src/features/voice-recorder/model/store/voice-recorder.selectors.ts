import type { VoiceRecorderStore } from "./voice-recorder.types";

export const audioUrlSelector = (state: VoiceRecorderStore) => state.audioUrl;

export const audioBlobSelector = (state: VoiceRecorderStore) => state.audioBlob;

export const statusSelector = (state: VoiceRecorderStore) => state.status;

export const recorderTimeSelector = (state: VoiceRecorderStore) =>
  state.recorderTime;

export const playbackTimeSelector = (state: VoiceRecorderStore) =>
  state.playbackTime;

export const isRecorderOpenSelector = (state: VoiceRecorderStore) =>
  state.isRecorderOpen;

export const voiceRecorderActionsSelector = (state: VoiceRecorderStore) =>
  state.actions;

export const allVoiceRecorderSelector = (state: VoiceRecorderStore) => ({
  audioUrl: state.audioUrl,
  status: state.status,
  isRecorderOpen: state.isRecorderOpen,
  recorderTime: state.recorderTime,
  playbackTime: state.playbackTime,
});
