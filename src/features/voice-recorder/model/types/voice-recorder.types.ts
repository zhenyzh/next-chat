export type VoiceRecorderStatus = "idle" | "recording" | "preview" | "paused";

export type AudioAnalyser = {
  analyser: AnalyserNode;
  data: Uint8Array<ArrayBuffer>;
  ctx: AudioContext;
};
