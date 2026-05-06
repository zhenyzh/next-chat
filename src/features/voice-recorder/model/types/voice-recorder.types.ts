export type VoiceRecorderStatus =
  | "idle"
  | "recording"
  | "ready"
  | "paused"
  | "paused_recording"
  | "playing";

export type AudioAnalyser = {
  analyser: AnalyserNode;
  data: Uint8Array<ArrayBuffer>;
  ctx: AudioContext;
};
