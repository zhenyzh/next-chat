import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { VoiceRecorderStore, VoiceRecorder } from "./voice-recorder.types";

const BARS_COUNT = 200;

const defaultFile: VoiceRecorder = {
  audioUrl: null,
  status: "idle",
  volume: 0,
  bars: Array(BARS_COUNT).fill(4),
  barsCount: BARS_COUNT,
  isRecorderOpen: false,
  playbackTime: 0,
  recorderTime: 0,
};

export const useVoiceRecorderStore = create<VoiceRecorderStore>()(
  immer((set) => ({
    ...defaultFile,

    actions: {
      setAudioUrl: (audioUrl) => {
        set((state) => {
          state.audioUrl = audioUrl;
        });
      },
      setStatus: (status) => {
        set((state) => {
          state.status = status;
        });
      },
      incrementPlaybackTime: () => {
        set((state) => {
          state.playbackTime += 1;
        });
      },
      incrementRecorderTime: () => {
        set((state) => {
          state.recorderTime += 1;
        });
      },
      resetRecorderTime: () => {
        set((state) => {
          state.recorderTime = 0;
        });
      },
      resetPlaybackTime: () => {
        set((state) => {
          state.playbackTime = 0;
        });
      },
      setVolume: (next) => {
        set((state) => {
          state.volume = state.volume * 0.8 + next * 0.2;
        });
      },
      setBars: (newBars) => {
        set((state) => {
          state.bars = newBars.map((v, i) => state.bars[i] * 0.7 + v * 0.3);
        });
      },
      openRecorder: () => {
        set((state) => {
          state.isRecorderOpen = true;
        });
      },
      closeRecorder: () => {
        set((state) => {
          state.isRecorderOpen = false;
        });
      },
      reset: () => set(defaultFile),
    },
  })),
);
